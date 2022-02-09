import * as React from "react";

export const Frame = () => {
  const [lang, setLang] = React.useState(false);

  const LangSelector = () => {
    setLang(!lang);
    console.log(lang, "LangSelector");
  };

  const Clock = () => {
    const [date, setDate] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(() => {
      const timer = setInterval(() => {
        setDate(new Date().toLocaleTimeString());
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, 1000);

    return `HOUR : ${date}`;
  };

  return (
    <>
      <div className="top">
        <div className="subTop">
          <div className="subTop-left">
            <div className="lang-selector" onClick={LangSelector}>
              {lang === false ? (
                <div>
                  <span>EN</span>/
                  <span className="underline-hover" style={{ opacity: 0.5 }}>
                    FR
                  </span>
                </div>
              ) : (
                <div>
                  <span className="underline-hover" style={{ opacity: 0.5 }}>
                    EN
                  </span>
                  /<span>FR</span>
                </div>
              )}
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="subTop-right">
            <div className="name">POL SEZNEC</div>
            <div className="hour">{Clock()}</div>
          </div>
        </div>
      </div>
      <div className="right"></div>
      <div className="bottom">
        <div className="subTop"></div>
      </div>
      <div className="left"></div>
    </>
  );
};
