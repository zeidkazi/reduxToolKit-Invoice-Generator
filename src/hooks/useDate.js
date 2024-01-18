
const useDate = () => {
    const  getDate =()=>{
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }
    
    return getDate()
}

export default useDate
