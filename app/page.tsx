import Navbar from "@/components/Navbar";
import ScrollCanvas from "@/components/ScrollCanvas";
import HeroSection from "@/components/sections/HeroSection";
import EngineeringSection from "@/components/sections/EngineeringSection";
import ANCSection from "@/components/sections/ANCSection";
import SoundSection from "@/components/sections/SoundSection";
import BatterySection from "@/components/sections/BatterySection";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-void">
            <Navbar />

            {/* Scroll Canvas - Creates scroll height and switches between 3 sequences */}
            <div className="relative h-[400vh]">
                {/* Sticky canvas container */}
                <div className="sticky top-0 left-0 w-full h-screen">
                    <ScrollCanvas />
                </div>

                {/* Scrollable content sections - positioned absolutely to overlay */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {/* OVERVIEW SECTION (0-45% scroll) - uses sequence 1 */}
                    <HeroSection />
                    <EngineeringSection />

                    {/* NOISE CANCELLING SECTION (45-63% scroll) - uses sequence 2 */}
                    <ANCSection />

                    {/* SOUND & SPECS SECTIONS (63-100% scroll) - uses sequence 3 */}
                    <SoundSection />
                    <BatterySection />
                </div>
            </div>
        </main>
    );
}
