import React, { Suspense, useState } from "react";

const containerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const buttonStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: 10,
};

const buttonHoverStyle: React.CSSProperties = {
  backgroundColor: "#0056b3",
};

const backButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  right: "auto",
  left: "10px",
  backgroundColor: "#dc3545",
};

const backButtonHoverStyle: React.CSSProperties = {
  backgroundColor: "#c82333",
};

const iframeContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const iframeStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  border: "none",
};

interface IframeSwitchProps {
  src: string;
  height: string;
  children: React.ReactNode;
}

export function IframeSwitch({ src, height, children }: IframeSwitchProps) {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div style={containerStyle}>
      {showIframe ? (
        <>
          <button
            style={backButtonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                backButtonHoverStyle.backgroundColor!)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                backButtonStyle.backgroundColor!)
            }
            onClick={() => setShowIframe(false)}
          >
            Back
          </button>
          <div style={iframeContainerStyle}>
            <Suspense fallback={<div>Loading...</div>}>
              <iframe src={src} style={{ ...iframeStyle, height }} />
            </Suspense>
          </div>
        </>
      ) : (
        <>
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor!)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor!)
            }
            onClick={() => setShowIframe(true)}
          >
            Interactive Demo
          </button>
          {children}
        </>
      )}
    </div>
  );
}
