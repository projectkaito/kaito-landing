import CryptoJS from "crypto-js";

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getBase64 = (file: File | Blob | string) =>
  new Promise<string>(async (resolve, reject) => {
    if (typeof file === "string") {
      const response = await fetch(file);
      const blob = await response.blob();
      file = blob;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result as string);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
      reject(error);
    };
  });

const handleFormInput = (data: any, key: string, formData: FormData) => {
  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      handleFormInput(item, `${key}[${index}]`, formData);
    });
  } else if (data instanceof File || data instanceof Blob) {
    formData.append(key, data);
  } else if (typeof data === "object") {
    for (const [k, v] of Object.entries(data)) {
      handleFormInput(v, `${key}[${k}]`, formData);
    }
  } else {
    formData.append(key, data);
  }
};

export const shapeFormData = (data: any) => {
  let formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    handleFormInput(value, key, formData);
  }
  return formData;
};

export const scrollIntoView = (id: string) => {
  const element = document.getElementById(id);
  const offset = element?.offsetTop;
  if (element && offset) {
    window.scrollTo(0, offset);
  }
};

export const fakeEncrypter = (data: string = "") => {
  const encrypted = CryptoJS.DES.encrypt(data, process.env.REACT_APP_ENCRYPT_KEY as string);
  return shorten(encrypted.toString(), 30);
  // return encrypted.toString();
};

// function to reduce string to length
export const shorten = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length);
  }
  return str;
};
