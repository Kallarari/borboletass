import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});
export default withPWA({
    reactStrictMode:true,
    disable: process.env.NODE_ENV === "development",
    dest:"public",
    register: true,
    skipWaiting: true,
    compiler:{
      ssr:true,
      displayName:true
    }
})