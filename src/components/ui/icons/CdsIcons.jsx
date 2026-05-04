/**
 * Coinbase Design System icons — sourced from
 * /Users/kaeytee/Desktop/CODES/Coinbase/cds/packages/icons/src/svgs/
 *
 * Each icon accepts: size (number, default 20), className, color (fill colour)
 */

const icon = (paths) =>
  function CdsIcon({ size = 20, className = '', color = 'currentColor' }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
      >
        {paths.map((d, i) => (
          <path key={i} fill={color} d={d} />
        ))}
      </svg>
    );
  };

export const DashboardIcon = icon([
  'M1.989 21.995v-20h8v20zm2-18v16h4v-16zm18 1h-10v2h10zm-10 6h10v2h-10zm10 6h-10v2h10z',
]);

export const GridIcon = icon([
  'M11 21H3v-8h8zm-6-2h4v-4H5zm16 2h-8v-8h8zm-6-2h4v-4h-4zm-4-8H3V3h8zM5 9h4V5H5zm16 2h-8V3h8zm-6-2h4V5h-4z',
]);

export const BriefcaseIcon = icon([
  'M7.989 6.995v-4h8v4h6v14h-20v-14zm2-2v2h4v-2zm-6 4v10h16v-10z',
]);

export const ChartBarIcon = icon([
  'M19.989 1.995v20h2v-20zm-4.5 20v-16h2v16zm-2.5 0v-12h-2v12zm-6.5 0h2v-8h-2zm-4.5-4v4h2v-4z',
]);

export const SparkleIcon = icon([
  'm15.489 8.495-3.5-7.5-3.5 7.5-7.5 3.5 7.5 3.5 3.5 7.5 3.5-7.5 7.5-3.5zm2.77 3.5-4.275 1.996-1.995 4.275-1.996-4.275-4.275-1.996L9.993 10l1.996-4.276L13.984 10z',
]);

export const RocketIcon = icon([
  'M13.627 8.251a1.36 1.36 0 0 1 1.92.04 1.363 1.363 0 0 1-1.966 1.887 1.364 1.364 0 0 1 .046-1.927',
  'M15.602 15.226c3.192-3.024 5.338-7.109 6.177-11.13.14-.673.244-1.346.31-2.01v-.014l-.085.005-.091.005q-.922.059-1.859.21c-4.02.648-8.159 2.577-11.315 5.584l-6.85.451 3.578 3.704-.005.008.996 1.045a3.21 3.21 0 0 0-1.513 2.653l-.065 2.82 2.819.065a3.21 3.21 0 0 0 2.719-1.387l.958 1.005 3.554 3.678zm-8.658.557a1.21 1.21 0 0 1 .98-1.162l1.027 1.076a1.21 1.21 0 0 1-1.206.925l-.82-.018zm4.794-.062-3.75-3.93c2.735-3.899 7.233-6.499 11.671-7.396-1.1 4.395-3.904 8.774-7.921 11.326',
]);

export const NewsFeedIcon = icon([
  'M1.989 1.995v11h12v-11zm10 2v7h-8v-7zm4-2v20h6v-20zm4 2v16h-2v-16zm-18 18v-7h12v7zm2-5v3h8v-3z',
]);

export const SendReceiveIcon = icon([
  'M2.989 14.58v2.83l4.5 4.5 4.5-4.5v-2.83l-3.5 3.5V7.996h-2v10.086zm12.5-8.67v10.085h2V5.91l3.5 3.5V6.581l-4.5-4.5-4.5 4.5v2.828z',
]);

export const AddCryptoIcon = icon([
  'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 5v4h4v2h-4v4h-2v-4H7v-2h4V7h2z',
]);

/**
 * SendIcon — filled paper-plane / arrow, matches Figma fluent:send-28-filled (node 71:6067)
 * Blue right-pointing filled arrow used for "Send cryptocurrency" action.
 */
export const SendIcon = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    <path fill={color} d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.52 60.52 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
  </svg>
);

/**
 * ReceiveIcon — QR code scan, matches Figma fluent:qr-code-24-filled (node 71:6091)
 * Used for "Receive cryptocurrency" action.
 */
export const ReceiveIcon = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    <path fill={color} d="M3 3h6.75A.75.75 0 0 1 10.5 3.75v6.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 3 3Zm1.5 1.5v4.5h4.5V4.5H4.5Zm0 0" />
    <path fill={color} d="M5.25 5.25h3v3h-3v-3Zm8.25-2.25h6.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-.75.75H13.5a.75.75 0 0 1-.75-.75V3.75a.75.75 0 0 1 .75-.75Zm1.5 1.5v4.5h4.5V4.5H15Zm0 0" />
    <path fill={color} d="M15.75 5.25h3v3h-3v-3Zm-12.75 9H9.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V15a.75.75 0 0 1 .75-.75Zm1.5 1.5v4.5h4.5V15H4.5Zm0 0" />
    <path fill={color} d="M5.25 15.75h3v3h-3v-3Zm8.25-.75h1.5v1.5H13.5V15Zm1.5 1.5H16.5v1.5H15V16.5Zm-1.5 1.5h1.5V19.5H13.5V18Zm1.5 1.5H16.5V21H15v-1.5Zm1.5-3h1.5v1.5H16.5V16.5Zm1.5 0H19.5v1.5H18V16.5Zm1.5 0H21v1.5h-1.5V16.5Zm-3-1.5H18v1.5h-1.5V15Zm1.5 0H21v1.5h-1.5V15Zm1.5 3h1.5v1.5H21V18Zm0 1.5V21h-1.5v-1.5H21Zm-3 0h1.5V21H18v-1.5Zm-3-1.5h1.5v1.5H15V18Zm3-3h1.5v1.5H18V15Zm0 0" />
  </svg>
);

/**
 * SwapIcon — double horizontal arrow, matches Figma node I34:3357;28:3524 (Sort_arrow)
 * Two opposing arrows: left arrow on top row, right arrow on bottom row.
 */
export const SwapIcon = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    {/* Left-pointing arrow (top) */}
    <path fill={color} d="M13 4H7.414l1.293-1.293-1.414-1.414L3.586 5l3.707 3.707 1.414-1.414L7.414 6H13a3 3 0 0 1 0 6h-1v2h1a5 5 0 0 0 0-10Z" />
    {/* Right-pointing arrow (bottom) */}
    <path fill={color} d="M7 16h5.586l-1.293-1.293 1.414-1.414L16.414 17l-3.707 3.707-1.414-1.414L12.586 18H7a5 5 0 0 1 0-10h1V6H7a7 7 0 0 0 0 14Z" />
  </svg>
);

export const DownloadIcon = icon([
  'm6.989 10.581 4 4V1.995h2v12.586l4-4v2.828l-5 5-5-5z',
  'M3.989 14.995v5h16v-5h2v7h-20v-7z',
]);

export const ConvertIcon = icon([
  'M6.22 7.215a7.5 7.5 0 0 1 13.28 4.78H17l3.5 4 3.5-4h-2.5A9.5 9.5 0 0 0 4.801 5.796zM12 19.495a7.49 7.49 0 0 0 5.78-2.72l1.419 1.42a9.5 9.5 0 0 1-16.699-6.2H0l3.5-4 3.5 4H4.5a7.5 7.5 0 0 0 7.5 7.5',
]);

export const ProfileIcon = icon([
  'M15.989 5.995a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 5c3.921 0 7.184 3.88 7.868 9q.131.975.132 2h-16q0-1.025.132-2c.684-5.12 3.946-9 7.868-9m5.847 9c-.282-1.822-.94-3.408-1.808-4.602-1.175-1.615-2.628-2.398-4.04-2.398-1.41 0-2.864.783-4.039 2.398-.868 1.194-1.525 2.78-1.808 4.602z',
]);

export const LogoutIcon = icon([
  'M12.782 3.995h-9v16h9v2h-11v-20h11z',
  'M17.196 6.995h-2.829l4 4H5.782v2h12.585l-4 4h2.829l5-5z',
]);

export const BellIcon = icon([
  'M10.989 1.995v2.362a7 7 0 0 0-6 6.93v5.708h-3v2h6.277a3.81 3.81 0 0 0 7.446 0h6.277v-2h-3v-5.709a7 7 0 0 0-6-6.929V1.995zm6 9.291v5.71h-10v-5.71a5 5 0 0 1 10 0',
]);

export const MenuIcon = icon([
  'M4.989 6.495a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m3.5-11.5h15v-2h-15zm0 5.5h15v-2h-15zm0 5.5h15v-2h-15z',
]);

export const CloseIcon = icon([
  'm10.578 11.995-8.59-8.589L3.4 1.996l8.589 8.588 8.589-8.589 1.41 1.411-8.588 8.59 8.589 8.588-1.411 1.411-8.59-8.589-8.588 8.59-1.411-1.412z',
]);

export const WalletIcon = icon([
  'M16.989 15.995a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
  'M18.989 8.995v-7l-17 6.546v13.454h20v-13zm1 2v9h-16v-9zm-3-6.087v4.087H6.374z',
]);
