import { useEffect } from "preact/hooks";

export default function AnimatedBackground() {
    useEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        const background = document.createElement("div");
        background.style.position = "fixed";
        background.style.top = "0";
        background.style.left = "0";
        background.style.width = "100vw";
        background.style.height = "100vh";
        background.style.zIndex = "-3";
        background.style.background = "radial-gradient(at 50% 50%, #0f172a, #1e293b, #334155)";
        background.style.opacity = "0.9";
        document.body.appendChild(background);

        const style = document.createElement("style");
        style.textContent = `
            @keyframes slowRotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 0.7; filter: blur(${isMobile ? '15px' : '30px'}) brightness(1); }
                50% { opacity: 0.9; filter: blur(${isMobile ? '15px' : '30px'}) brightness(1.2); }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.body.removeChild(background);
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="Figures" style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "1",
            overflow: "hidden",
            pointerEvents: "none"
        }}>
            {[0, 1, 2, 3].map((i) => (
                <BlobFigure key={i} index={i} />
            ))}
        </div>
    );
}

function BlobFigure({ index }) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const colors = [
        "rgba(52, 42, 248, 0.5)",
        "rgba(165, 127, 1, 0.5)",
        "rgba(255, 15, 15, 0.5)",
        "rgba(102, 255, 204, 0.5)"
    ];

    const paths = [
        'M46.1,-45.6C59.1,-34.4,68.3,-17.2,67.5,-1.1C66.7,15,55.8,30,42.8,42.7C29.8,55.4,14.9,65.8,-1.8,67.6C-18.5,69.4,-37,62.6,-49.3,49.9C-61.6,37.2,-67.8,18.6,-66.5,1.3C-65.2,-16.1,-56.4,-32.1,-44.1,-43.3C-31.8,-54.5,-15.9,-60.8,0.8,-61.6C17.5,-62.4,35,-57.7,46.1,-45.6Z',
        'M49.4,-45.1C62.3,-32.5,69.5,-16.3,68.8,-1.1C68.1,14.2,59.5,28.3,46.6,41.1C33.7,53.9,16.8,65.3,-0.8,66.1C-18.5,66.9,-37,57.1,-50.3,44.3C-63.6,31.5,-71.7,15.7,-71.1,0.6C-70.5,-14.6,-61.1,-29.2,-47.8,-41.8C-34.5,-54.4,-17.3,-65,-1.4,-63.6C14.5,-62.2,29,-48.8,49.4,-45.1Z',
        'M45.7,-43.2C59.7,-29.6,71.9,-14.8,71.6,-0.2C71.3,14.4,58.5,28.8,44.5,42.1C30.5,55.4,15.2,67.6,-1.8,69.4C-18.8,71.2,-37.6,62.6,-50.5,49.3C-63.4,36,-70.4,18,-69.3,0.6C-68.2,-16.8,-59,-33.6,-46.1,-47.2C-33.2,-60.8,-16.6,-71.1,-0.3,-70.8C16,-70.5,31.7,-59.6,45.7,-43.2Z',
        'M43.1,-41.3C57.8,-28.7,72.6,-14.3,73.5,0.8C74.4,15.9,61.4,31.9,46.7,45.1C32,58.4,15.5,68.9,-1.5,70.4C-18.5,71.9,-37,64.4,-50.1,51.1C-63.2,37.8,-70.9,18.9,-70.2,0.5C-69.5,-17.9,-60.5,-35.8,-47.4,-48.4C-34.3,-61,-17.2,-68.3,-0.7,-67.6C15.8,-66.9,31.6,-58.2,43.1,-41.3Z'
    ];

    const positions = [
        { top: "10%", left: "5%", width: isMobile ? "80%" : "60%", animation: `slowRotate ${isMobile ? '10s' : '5s'} ease-in-out infinite, pulse ${isMobile ? '12s' : '8s'} ease-in-out infinite` },
        { top: "5%", right: "10%", width: isMobile ? "70%" : "55%", animation: `slowRotate ${isMobile ? '15s' : '9s'} ease-in-out infinite reverse, pulse ${isMobile ? '15s' : '10s'} ease-in-out infinite` },
        { bottom: "5%", left: "10%", width: isMobile ? "65%" : "50%", animation: `slowRotate ${isMobile ? '18s' : '12s'} ease-in-out infinite alternate` },
        { bottom: "10%", right: "5%", width: isMobile ? "80%" : "60%", animation: `slowRotate ${isMobile ? '20s' : '15s'} ease-in-out infinite alternate-reverse, pulse ${isMobile ? '15s' : '12s'} ease-in-out infinite` }
    ];

    return (
        <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: "absolute",
                width: positions[index].width,
                top: positions[index].top,
                left: positions[index].left,
                right: positions[index].right,
                bottom: positions[index].bottom,
                opacity: 0.8,
                filter: `blur(${isMobile ? 15 + index * 3 : 30 + index * 5}px)`,
                animation: positions[index].animation,
                willChange: "transform, opacity, filter",
                mixBlendMode: "screen"
            }}
        >
            <path fill={colors[index]} d={paths[index]} transform="translate(100 100)" />
        </svg>
    );
}