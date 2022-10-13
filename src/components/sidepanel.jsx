import { useState, useEffect } from "react";

const SidePanel = ({ colorChangeState }) => {
  const [colorSidePanel, setcolorSidePanel] = useState("#000");

  useEffect(() => {
    if (colorChangeState) {
      setcolorSidePanel("#6aff00");
      console.log("green");
    } else {
      setcolorSidePanel("#000");
      console.log("black");
    }
  }, [colorChangeState]);

  return (
    <aside className="sidepanel">
      <a
        href="https://t.me/u1011"
        target="_blank"
        rel="noreferrer"
        className={
          colorChangeState ? "sidepanel__link_active" : "sidepanel__link"
        }
      >
        <svg
          className="sidepanel__link sidepanel__link_90deg"
          width="22"
          height="22"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z"
            fill={colorSidePanel}
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/anastasiia-prudinskaia"
        target="_blank"
        rel="noreferrer"
        className={
          colorChangeState
            ? "sidepanel__link_active sidepanel__link_90deg"
            : "sidepanel__link sidepanel__link_90deg"
        }
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
            fill={colorSidePanel}
          ></path>
        </svg>
      </a>
      <a
        href="https://github.com/BulochkaBU"
        target="_blank"
        rel="noreferrer"
        className={
          colorChangeState ? "sidepanel__link_active" : "sidepanel__link"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-4.37114e-07 9.99951C-1.95608e-07 15.5245 4.36167 19.9995 9.74107 19.9995C14.0457 19.9995 17.6962 17.1345 18.9832 13.162C19.0749 12.662 18.7734 12.4787 18.5148 12.4787C18.2835 12.4787 17.6706 12.487 16.8585 12.4912C17.4459 15.2728 15.5517 15.8595 15.5517 15.8595C14.4274 16.3145 14.1267 16.972 14.1267 16.972C13.5228 17.8778 13.5352 16.902 13.5352 16.902C13.603 15.8978 14.5389 15.3703 14.5389 15.3703C16.0283 14.4787 15.5979 13.0295 15.3493 12.4578C14.719 12.3678 14.2903 12.1103 14.0466 11.8245C13.8029 14.0453 12.9652 16.3795 9.23304 16.3795C8.16988 16.3795 7.30085 15.992 6.61933 15.3503C6.37316 15.4628 5.3827 15.8003 4.04116 15.2628C4.04116 15.2628 3.78012 14.4253 5.03988 12.5128C4.82345 11.7128 4.71606 10.8628 4.7111 10.0128C4.71606 9.16284 4.82345 8.31285 5.03988 7.51284C3.78012 5.61285 4.04116 4.77535 4.04116 4.77535C5.3827 4.23785 6.37316 4.57534 6.61933 4.67535C7.30085 4.03785 8.16988 3.65035 9.23304 3.65035C12.9752 3.65035 13.7987 5.98784 14.0383 8.21284C14.3307 7.86284 14.928 7.53784 15.8408 7.53784C17.1444 7.53784 18.1918 7.55034 18.5082 7.55034C18.7635 7.55034 19.0683 7.37534 18.9708 6.86284C17.692 2.86201 14.0391 -0.000488895 9.74107 -0.000488707C4.36167 -0.000488472 -6.7851e-07 4.47701 -4.37114e-07 9.99951Z"
            fill={colorSidePanel}
          />
        </svg>
      </a>
      <div
        className="sidepanel__divider"
        style={{ background: colorSidePanel }}
      ></div>
      <div className="sidepanel__text" style={{ color: colorSidePanel }}>
        <span>Социальные сети</span>
      </div>
    </aside>
  );
};

export default SidePanel;
