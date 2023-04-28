import { Link, Head } from "@inertiajs/react";

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("contact")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Registrar
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <img
                            src="https://scontent.fbau1-1.fna.fbcdn.net/v/t39.30808-6/327252421_583564760014403_4687707061121712154_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZZjL1g2LS6YAX8B0JU9&_nc_ht=scontent.fbau1-1.fna&oh=00_AfDESdK8ZwWsyjRNtWUJzGeBAvTlZdqGD_GBUBz4_Pomrw&oe=644FE490"
                            className="block h-40 w-auto fill-current text-gray-800 rounded-full"
                        />
                    </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <a
                                href="/dashboard"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Tudo pronto!
                                    </h2>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        Clicando aqui ou em "Dashboard" no canto
                                        superior direito, você será
                                        encaminhado(a) para a página principal
                                        da aplicação. Nela, você encontrará a
                                        lista de contatos cadastrados, que pode
                                        ser melhor organizada de acordo com a
                                        necessidade (filtros, ordem...), as
                                        opções de edição, remoção e envio de
                                        e-mail, bem como a seção de cadastro de
                                        um novo contato!
                                    </p>
                                </div>
                            </a>

                            <a
                                href="/cadastrar"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Ou nem tanto...
                                    </h2>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        As máscaras dos campos de criação e
                                        edição não foram adicionadas. Isto se
                                        deu pois era a última tarefa a ser feita
                                        (antes do upload do site) e, para minha
                                        surpresa, os inputs teriam de ser
                                        reestilizados. Para não comprometer a
                                        coesão visual, a tarefa foi adiada. Além
                                        disso, alguns textos podem aparecer em
                                        inglês por conta dos componentes. Nada
                                        grave.
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/hugov-costa/instar"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Quanto ao código
                                    </h2>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        O código está disponível em um
                                        repositório no GitHub. É só clicar aqui!
                                        <br />
                                        No surgimento de qualquer dúvida, é só
                                        me chamar que eu tiro quaisquer dúvidas
                                        sobre o código. O projeto e o banco de
                                        dados estão hospedados numa máquina
                                        virtual da AWS.
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/hugocostadev/"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        E por fim
                                    </h2>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        Clicando aqui, você é redirecionado(a)
                                        para o meu LinkedIn. Tem tudo o que tem
                                        no currículo. Convido você, usuário, a
                                        criar uma nova conexão. Mal não pode
                                        fazer.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                        <div className="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
                            Feito com Laravel, React e MySQL.
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
