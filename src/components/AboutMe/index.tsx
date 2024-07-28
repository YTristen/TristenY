import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [theme, setTheme] = useState("");
  // 接受全局事件
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
    window.addEventListener("theme-change", (e) => {
      setTheme(e.detail ? "theme-dark" : "light");
    });
    return () => {
      window.removeEventListener("theme-change", (e) => {});
    };
  }, []);
  return (
    <>
      <Card isBlurred>
        <CardBody className="p-8">
          <p style={{ color: "var(--gray-200)" }}>
            I hold a bachelor's degree from Zhejiang Sci-Tech University and a
            master's degree in Software Engineering from the School of
            Informatics at Xiamen University, where I studied under Professor
            Shihui Guo. Currently, I am a front-end development engineer at
            Meituan. In my free time, I enjoy photography and citywalk.
          </p>
        </CardBody>
      </Card>

      <div className="mt-8">
        <div className="text-3xl font-bold">📑 Education</div>
        <div className="mt-8 gap-8 grid  md:flex content-center ">
          <Card isBlurred className="md:w-[50%] p-2">
            <CardHeader className="flex">
              <Image
                alt="xmu logo"
                height={80}
                radius="md"
                src={
                  theme === "theme-dark"
                    ? "/assets/logo/xmu_light.png"
                    : "/assets/logo/xmu.png"
                }
                className="opacity-100"
                width={80}
              />
            </CardHeader>
            <CardBody>
              <p style={{ color: "var(--gray-200)" }}>2021-2024</p>
              <p style={{ color: "var(--gray-200)" }}>
                Master in Software Engineering
              </p>
            </CardBody>
          </Card>
          <Card isBlurred className="md:w-[50%] p-2">
            <CardHeader className="flex">
              <Image
                alt="zstu logo"
                height={80}
                radius="md"
                src="/assets/logo/zstu.png"
                className="opacity-100"
                width={80}
              />
            </CardHeader>
            <CardBody>
              <p style={{ color: "var(--gray-200)" }}>2017-2021</p>
              <p style={{ color: "var(--gray-200)" }}>
                Bachelor in Computer Science and Technology
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-3xl font-bold">💼 Work</div>
        <div className="mt-8 gap-8 grid  md:flex content-center ">
          <Card isBlurred className="md:w-[50%] p-2">
            <CardHeader className="flex">
              <Image
                alt="xmu logo"
                height={80}
                radius="md"
                src="/assets/logo/meituan.png"
                className="opacity-100"
                width={80}
              />
            </CardHeader>
            <CardBody>
              <p style={{ color: "var(--gray-200)" }}>2024-Now</p>
              <p style={{ color: "var(--gray-200)" }}>
                Meituan
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
