import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../../services/api";

export default function Notices() {
    const [notices, setNotices] = useState([]);

    const fetch = async () => {
        try {
            const { data } = await Api.get("/notices");

            setNotices(data);
        } catch (err) {
            console.log(err);
        }
    };

    const remove = async (notice) => {
        if (window.confirm("Deseja realmente remover este aviso?")) {
            await Api.delete(`/notices/${notice._id}`);

            fetch();
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="mb-6 flex items-center justify-between">
                <h2 class="text-2xl font-semibold leading-tight">Avisos</h2>

                <div>
                    <Link
                        to="/avisos/novo"
                        type="button"
                        class="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50 flex items-center"
                    >
                        <svg
                            class="w-4 h-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                        </svg>
                        Novo Aviso
                    </Link>
                </div>
            </div>
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Titulo
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Aviso
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {notices.map((notice, index) => (
                            <tr key={index}>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {notice.title}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {notice.description}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button
                                        type="button"
                                        onClick={() => remove(notice)}
                                        class="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-md border border-red-600 hover:bg-red-50 flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-4 h-4 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


