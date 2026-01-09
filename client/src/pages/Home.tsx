import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Globe } from "lucide-react";
import { ContactButton } from "@/components/ContactButton";
import { useTrackVisitor } from "@/hooks/use-visitors";
import profileImage from "@assets/7818C4F2-C031-44FD-85CB-395D09758E48_1767881406884.png";

export default function Home() {
  const { mutate: trackVisitor } = useTrackVisitor();

  useEffect(() => {
    // Track visitor on mount
    trackVisitor();
  }, [trackVisitor]);

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white/50 overflow-hidden relative"
      >
        {/* Decorative top pattern/gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent opacity-50 pointer-events-none" />

        <div className="relative px-6 py-12 flex flex-col items-center text-center">
          
          {/* Profile Image with Ring */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8 group"
          >
            <div className="absolute inset-0 rounded-full bg-slate-100 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative h-32 w-32 rounded-full p-1 bg-white shadow-lg ring-1 ring-slate-100">
              <img 
                src={profileImage} 
                alt="Park Sun-rye" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-2 mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-slate-900 font-display tracking-tight"
            >
              박선례
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-500 font-medium tracking-wide text-sm uppercase"
            >
              AI 활용 교육 기획·강연 & 영상 제작 (기획, 촬영, 종편))
            </motion.p>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <ContactButton 
              href="https://reframe-gamma.vercel.app/"
              icon={<Globe className="w-5 h-5" />}
              label="Re:frame Homepage"
              subLabel="AI 교육 커리큘럼 & 영상제작 프로세스"
              delay={0.5}
            />

            <ContactButton 
              href="https://blog.naver.com/frameview-"
              icon={<Globe className="w-5 h-5" />}
              label="blog"
              subLabel="4060 AI 활용 강사"
              delay={0.6}
            />
            
            <ContactButton 
              href="https://www.instagram.com/slowsoyang?igsh=cTNkYWxybHhxb2Rq&utm_source=qr"
              icon={<Instagram className="w-5 h-5" />}
              label="Instagram"
              subLabel="@slowsoyang"
              delay={0.7}
            />

            <ContactButton 
              href="mailto:pianossun@naver.com"
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              subLabel="pianossun@naver.com"
              delay={0.8}
            />
          </div>

          {/* Footer/Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 text-xs text-slate-300 font-light"
          >
            © {new Date().getFullYear()} Re:frame. All rights reserved.
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
