import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { email } = req.body;

  // Validation
  if (!email || typeof email !== "string") {
    return res.status(400).json({ success: false, error: "Email is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid email format" });
  }

  // Basic rate limiting (IP-based)
  const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  
  // Simple spam check
  const suspiciousPatterns = [/test@test/, /spam/, /fake@fake/];
  if (suspiciousPatterns.some(pattern => pattern.test(email.toLowerCase()))) {
    return res.status(400).json({ success: false, error: "Invalid email address" });
  }

  try {
    // TODO: When Supabase is connected, replace this with:
    // const { data, error } = await supabase
    //   .from('waitlist')
    //   .insert([{ email, created_at: new Date().toISOString(), ip: userIP }])
    //   .select();
    // 
    // if (error) {
    //   if (error.code === '23505') { // Duplicate key
    //     return res.status(200).json({ 
    //       success: true, 
    //       message: "You're already on the waitlist!" 
    //     });
    //   }
    //   throw error;
    // }

    // Temporary: Return success but indicate backend needs setup
    return res.status(503).json({ 
      success: false, 
      error: "Waitlist backend not yet configured. Please connect Supabase to enable email collection." 
    });

  } catch (error) {
    console.error("Waitlist API error:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Something went wrong. Please try again." 
    });
  }
}