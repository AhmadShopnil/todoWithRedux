import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import NavbarNavbar from '../components/Navbar/Navbar';
import ToDoLIst from '../components/ToDoList/ToDoLIst';

const Home = () => {
    return (
        <div>
            <div
                className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                <NavbarNavbar></NavbarNavbar>
                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    <Header></Header>
                    <hr className="mt-4" />
                    <ToDoLIst></ToDoLIst>
                    <hr className="mt-4" />
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;