import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Project from "./Components/Project";

const inter = Inter({ subsets: ["latin"] });

const skills = [
    "Website Consulting",
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "SEO",
];

export default function Home() {
    return (
        <main
            className="x-padding"
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginTop: "1rem",
                }}
            >
                <svg height="3.6rem" viewBox="0 0 14 12" fill="none">
                    <g clipPath="url(#clip0_67_213)">
                        <rect width="14" height="12" fill="white" />
                        <path
                            d="M1 1V9C1 10.1046 1.89543 11 3 11V11C4.10457 11 5 10.1046 5 9V1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.99902 1V11"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <rect
                            x="12"
                            y="9.99997"
                            width="2"
                            height="2"
                            rx="1"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_67_213">
                            <rect width="14" height="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div style={{
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  textTransform: "uppercase",
                  lineHeight: 0.8,
                  marginLeft: "1rem",
                  fontStyle: "italic",

                }}>Design Studio</div>
            </div>
            <div
                className="about-container"
                style={{
                    fontFamily: "favorit Mono",
                    display: "flex",
                    width: "100%",
                }}
            >
                <div
                    className="about-image"
                    style={{
                        position: "relative",
                        borderRadius: "100%",
                    }}
                >
                    <Image
                        fill
                        src={"/head.png"}
                        alt={"image"}
                        sizes="30vw"
                        priority
                        style={{
                            borderRadius: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div
                    className="about-text"
                    style={{
                        maxWidth: "30rem",
                        opacity: 0.5,
                    }}
                >{`Phoenix Construction Resources is your go-to source for flexible, skilled labor on construction sites across the New England area. When your project requires additional manpower, we supply the dependable.`}</div>
            </div>
            <div
                style={{
                    fontFamily: "favorit Mono",
                    textTransform: "uppercase",
                    opacity: 0.5,
                    marginTop: "6rem",
                }}
            >
                // Projects
            </div>
            <Project
                images={["/3law.png"]}
                title={"3Laws Robotics"}
                text={`Phoenix Construction Resources is your go-to source for flexible, skilled labor on construction sites across the New England area. When your project requires additional manpower, we supply the dependable.`}
                contributions={[
                    "UI/UX Design",
                    "Frontend Development",
                    "Backend Development",
                ]}
                year={2023}
                href={"https://3laws.tech"}
            />
            <Project
                images={["/larn.png"]}
                title={"Larnelle Art"}
                text={`Phoenix Construction Resources is your go-to source for flexible, skilled labor on construction sites across the New England area. When your project requires additional manpower, we supply the dependable.`}
                contributions={[
                    "UI/UX Design",
                    "Frontend Development",
                    "Backend Development",
                ]}
                year={2023}
                href={"https://www.larnelleart.com"}
            />
            <Project
                images={["/sibo.png"]}
                title={"Sibo Chocolate"}
                text={`Phoenix Construction Resources is your go-to source for flexible, skilled labor on construction sites across the New England area. When your project requires additional manpower, we supply the dependable.`}
                contributions={[
                    "UI/UX Design",
                    "Frontend Development",
                    "E-Commerce Integration",
                ]}
                year={2023}
                href={"https://sibo-chocolate.vercel.app"}
            />
            <div style={{
              display: "flex",
              width: "100%",
              justifyContent: 'flex-end',
              opacity: 0.5,
              marginBottom: "2rem",
              gap: '2rem',
              whiteSpace: 'nowrap',
            }}>
              <div>emilio@ui-design-studio.com</div><div>781-879-7402</div>
            </div>
        </main>
    );
}
