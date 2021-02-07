import challengeReducer from "../challenges";

describe("Reducer", () => {
  it("adds challenges", () => {
    const data = [
      {
        id: 1,
        name: "Inteligência Artificial",
        description:
          "Um dos maiores desafios é entender como as empresas estão \nse comportando neste cenário de pandemia. é preciso levantar, mapear e organizar o máximo de informações possíveis, \ncriando soluções tecnológicas que possam ser associadas ao conceito de Inteligência Artificial e \ngerar dashboards dinâmicas, relatórios previsíveis ou ainda, projeções e simulações do futuro de empresas e do próprio mercado.",
        level: "hard",
        challenges_type: "team",
        status: "active",
        created_at: "2021-02-06T23:48:33.711Z",
        updated_at: "2021-02-06T23:48:33.711Z",
        image:
          "https://image.freepik.com/psd-gratuitas/maquete-de-logotipo-preto-gravado_125540-223.jpg",
      },
      {
        id: 2,
        name: "Front-end",
        description:
          "Queremos montar uma versão do blog da Apiki apenas para Devs, e queremos que\nessa seja uma solução headless, esta nova versão terá as seguintes páginas: Página inicial: Listará as últimas postagens do blog com a \ncategoria Desenvolvimento; Interna: Exibirá o conteúdo da postagem.",
        level: "medium",
        challenges_type: "single",
        status: "active",
        created_at: "2021-02-06T23:48:33.717Z",
        updated_at: "2021-02-06T23:48:33.717Z",
        image:
          "https://image.freepik.com/fotos-gratis/ilustracao-da-palavra-da-imagem_93826-815.jpg",
      },
    ];
    const action = {
      type: "CHALLENGESLIST",
      data,
    };

    const result = challengeReducer([], action);

    expect(result).toStrictEqual(data);
  });
});
