const generarId = () => {
    const randomm = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);
    return randomm + fecha;
}

export default generarId;