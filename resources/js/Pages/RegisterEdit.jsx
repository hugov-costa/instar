import GuestLayout from "@/Layouts/GuestLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { Box, Button, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import base64 from "base-64";
import ReactImageFileToBase64 from "react-file-image-to-base64";

export default function Register({ auth, categories, register }) {
    const { data, setData, post, patch, processing, errors } = useForm({
        category_id: register.category_id,
        name: register.name,
        email: register.email,
        address: register.address,
        phone: register.phone,
        mobile: register.mobile,
        city: register.city,
        state: register.state,
        picture: register.picture,
        birthday: register.birthday,
        observations: register.observations,
    });

    const [image, setImage] = useState("");

    const handleOnCompleted = (files) => {
        setImage(files[0].base64_file);
        setData("picture", files[0].base64_file);
    };

    const submit = (e) => {
        e.preventDefault();

        patch(`/editar/${register.id}`);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Editar
                </h2>
            }
        >
            <GuestLayout>
                <Head title="Editar" />
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nome" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="category_id" value="Categoria" />

                        <Select
                            id="category_id"
                            name="category_id"
                            value={data.category_id}
                            className="mt-1 block w-full"
                            size="small"
                            onChange={(e) =>
                                setData("category_id", e.target.value)
                            }
                            required
                        >
                            {categories.map((category) => (
                                <MenuItem value={category.id} key={category.id}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="address" value="Endereço" />

                        <TextInput
                            id="address"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("address", e.target.value)}
                            required
                        />

                        <InputError message={errors.address} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="phone" value="Telefone" />

                        <TextInput
                            id="phone"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("phone", e.target.value)}
                            required
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="mobile" value="Celular" />

                        <TextInput
                            id="mobile"
                            name="mobile"
                            value={data.mobile}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("mobile", e.target.value)}
                            required
                        />

                        <InputError message={errors.mobile} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="city" value="Cidade" />

                        <TextInput
                            id="city"
                            name="city"
                            value={data.city}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("city", e.target.value)}
                            required
                        />

                        <InputError message={errors.city} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="state" value="Estado" />

                        <TextInput
                            id="state"
                            name="state"
                            value={data.state}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("state", e.target.value)}
                            required
                        />

                        <InputError message={errors.state} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="picture" value="Foto" />

                        <Box style={{ marginTop: "10px", marginLeft: "10px" }}>
                            {image !== "" ? (
                                <img
                                    src={image}
                                    alt="Foto do cadastro"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : data.picture !== "" ? (
                                <img
                                    src={data.picture}
                                    alt="Foto do cadastro"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                <img
                                    src="https://insightfulmatters.com/wp-content/uploads/2018/06/bio-portrait-placeholder.jpg"
                                    alt="Foto do cadastro"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                    }}
                                />
                            )}
                            <Box
                                style={{
                                    marginTop: "10px",
                                    marginLeft: "12px",
                                }}
                            >
                                <ReactImageFileToBase64
                                    preferredButtonText="Selecione"
                                    onCompleted={handleOnCompleted}
                                />
                            </Box>
                        </Box>

                        <InputError message={errors.picture} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="birthday"
                            value="Data de nascimento"
                        />

                        <TextInput
                            id="birthday"
                            name="birthday"
                            value={data.birthday}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("birthday", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.birthday}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="observations"
                            value="Observações"
                        />

                        <TextInput
                            id="observations"
                            name="observations"
                            value={data.observations}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("observations", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.observations}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Atualizar
                        </PrimaryButton>
                    </div>
                </form>
            </GuestLayout>
        </AuthenticatedLayout>
    );
}
