export const GetSSOString = () => {
    return new Promise((resolve, reject) => {
      try {
        window.ma.callNativeAPI(
          "gethwssostring",
          { merchantAppId: "kpe474a3a5101c7edb1bf8b84ffadb1b" },
          (res) => {
            console.log("ssostring: ", res);
            resolve(res);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  };
  
  export const StartPay = (payload, cb) => {
    console.log('payload',payload)
    window.ma?.callNativeAPI("startPay", payload, (res) => {
      console.log('res',res);
      if (res.resultCode == 1) {
        console.log("start pay success");
        cb?.();
      }
    });
  };
  
  export const SaveImage = (image, cb) => {
    window.ma?.saveImage({
      content: image,
      success: (res) => {
        console.log(res, "Success Save Image");
        cb?.();
      },
      fail: (res) => {
        console.log(res, "Fail to Save Image");
      },
      complete: (res) => {
        console.log(res, "Complete Save Image");
      },
    });
  };
  
  export const ShowToast = ({ title, icon, duraion }) => {
    window.ma
      .showToast({
        title,
        icon,
        duraion,
      })
      .then(() => {
        console.log(title);
      });
  };