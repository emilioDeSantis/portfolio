import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ title, images, text, contributions, year, href }) => {
    return (
        <div className="project-container" style={{}}>
            <div
                className="project-image"
                style={{
                    aspectRatio: "1.7666",
                    position: "relative",
                    outline: "2px solid black",
                    borderRadius: "10px",
                    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.5)",
                }}
            >
                <Image
                    fill
                    src={images[0]}
                    alt={"image"}
                    sizes="50vw"
                    priority
                    style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                    }}
                />
            </div>
            {/* <div>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image for ${title}`}
            width={456}
            height={216}
            layout="responsive"
          />
        ))}
      </div> */}
            <div
                className="project-text"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // height: "31rem",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2
                        style={{
                            fontSize: "3.6rem",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            lineHeight: "1",
                        }}
                    >
                        {title}
                    </h2>
                    <p style={{ marginTop: "2rem", opacity: 0.5 }}>{text}</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "Favorit",
                        marginTop: "4rem",
                    }}
                >
                    <h3
                        style={{
                            fontWeight: "700",
                            fontSize: "1.4rem",
                            opacity: 0.6,
                        }}
                    >
                        Contributions
                    </h3>
                    <ul>
                        {contributions.map((contribution, index) => (
                            <li
                                key={index}
                                style={{
                                    opacity: 0.6,
                                    fontSize: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    marginTop: "0.5rem",
                                    textTransform: "uppercase",
                                }}
                            >
                                <div
                                    style={{
                                        height: "3px",
                                        width: "3px",
                                        background: "black",
                                    }}
                                />
                                {contribution}
                            </li>
                        ))}
                    </ul>
                    <div
                        style={{
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "4px",
                            fontWeight: "700",
                            justifyContent: "space-between",
                            width: "100%",
                            marginTop: "1.6rem",
                        }}
                    >
                        <div
                            style={{
                                opacity: 0.67,
                                fontSize: "1rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                marginTop: "0.5rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "3px",
                                    width: "3px",
                                    background: "black",
                                    lineHeight: 0.6,
                                }}
                            />

                            <div style={{}}>Year</div>
                        </div>
                        <div
                            style={{
                                opacity: 0.67,
                                fontSize: "3rem",
                                marginLeft: "0.6rem",
                                lineHeight: 0.8,
                            }}
                        >
                            {year}
                        </div>
                        <div style={{ flexGrow: 1 }} />
                        <Link
                            target="_blank"
                            href={href}
                            style={{
                                display: "inline-block",
                                fontSize: "1rem",
                                color: "#FF1F55",
                                border: "1px solid #FF1F55",
                                padding: "0.5rem 1.6rem",
                                textDecoration: "none",
                                cursor: "pointer",
                                fontFamily: "Aeonik",
                                fontWeight: "300",
                                fontSize: "1.2rem",
                            }}
                        >
                            Visit Site
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
