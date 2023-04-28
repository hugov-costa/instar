import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import MaterialReactTable from "material-react-table";
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Email as EmailIcon,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useMemo } from "react";

export default function Dashboard({ auth, registers: data }) {
    const columns = useMemo(
        () => [
            {
                accessorKey: "name",
                header: "Nome",
            },
            {
                accessorKey: "email",
                header: "E-mail",
            },

            {
                accessorKey: "city",
                header: "Cidade",
            },
            {
                accessorKey: "state",
                header: "Estado",
            },
        ],
        []
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <MaterialReactTable
                            columns={columns}
                            data={data}
                            enableRowActions
                            renderRowActions={({ row, table }) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "nowrap",
                                        gap: "8px",
                                    }}
                                >
                                    <IconButton
                                        color="primary"
                                        href={route("email", [row.original.id])}
                                    >
                                        <EmailIcon />
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        href={route("contact.edit", [
                                            row.original.id,
                                        ])}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() =>
                                            Inertia.delete(
                                                route("contact.delete", [
                                                    row.original.id,
                                                ])
                                            )
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            )}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
