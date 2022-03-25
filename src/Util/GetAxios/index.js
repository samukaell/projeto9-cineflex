export default function GetAxios(link,setItem){
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
    
        requisicao.then(resposta => {
            const {data} = resposta;
            setItems(data);
            setDiasHorario(data.days);
        })
        requisicao.catch(err=> console.log(err.resposta));
        
    }, []);
}