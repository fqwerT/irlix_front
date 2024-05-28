export const handleTypeData = (target,setData,data) => {
    if (target.placeholder === "title") {
      setData({ ...data, title: target.value });
    }
    if (target.placeholder === "content") {
      setData({ ...data, content: target.value });
    }
  }