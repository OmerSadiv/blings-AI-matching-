import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">🚀 קבל התאמות חכמות למשקיעים ופרטנרים</h1>
        <p className="text-center text-gray-600">השאר את הפרטים שלך ונחזור אליך עם חיבורים מדויקים שיקדמו את הסטארטאפ שלך</p>
        <div className="space-y-4">
          <Input placeholder="שם מלא" />
          <Input placeholder="שם הסטארטאפ שלך" />
          <Input placeholder="אימייל ליצירת קשר" type="email" />
          <Input placeholder="תחום הפעילות של החברה (למשל: HealthTech, AI, SaaS)" />
          <Textarea placeholder="ספר בקצרה מה המוצר שלכם ולמי אתם רוצים להגיע" className="min-h-[120px]" />
          <Button className="w-full text-lg py-6">📬 שלח וקבל התאמות</Button>
        </div>
      </div>
    </div>
  );
}
