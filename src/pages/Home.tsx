import React, {useEffect, useState} from 'react';
import Wrapper from "./layout/Wrapper";
import {Product} from "../interfaces/Product";
import Loading from "../components/Loading";
import {Routes, Route, Navigate} from "react-router-dom";
import PageNotFound from "./errors/PageNotFound";

const Home = () => {
    const [products, setProducts] = useState([] as Product[]);
    const [answer, setAnswer] = useState(false)

    const [restime, setCountdown] = useState(false)

    let number = 10

    const giveAnswer = () => {
        setAnswer(!answer)
    }

    const timesUp = () => {
        setCountdown(!restime)
    }

    function start(){
//   按下 start 後 id 為 timer 的 DIV 內容可以開始倒數到到 0。
//         lect timer = document.querySelector("#timer");
//         let number = 10;
        setInterval(function(){
            number -- ;
            if(number <= 0 )
                number = 0;
                timesUp();
            // timer.innerText = number + 0 }, 1000);
        })
    }


    useEffect(() => {
        (
            async () => {
                // 從 admin server 取得所有產品
                const response = await fetch(`http://localhost:8000/api/products`);
                const data = await response.json();

                setProducts(data);
                if (data[0] !== null) {
                    giveAnswer();
                    // window.alert(answer)
                }
                // window.alert(data[0]["id"])
            }
        )();
    }, []);
    const like = async (id: number) => {
        await fetch(`http://localhost:8001/api/products/${id}/piku`, {
            method: `POST`,
            headers: {'Content-Type': 'application/json'}
        });
        setProducts(products.map(
            (p: Product) => {
                if (p.id === id) {
                    p.likes++;
                }
                return p;
            }
        ))
    }
    return (
        <Wrapper>
            <main>
                <div className="text-center">
                    <div className="album py-5 bg-light">
                        {(answer===false) &&  <Loading/> }
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {products.map(
                                    (p: Product) => {
                                        return (
                                            <div className="col-md-4" key={p.id}>
                                                <div className="card mb-4 shadow-sm">
                                                    <img src={p.image} height="180"/>
                                                    <div className="card-body">
                                                        <p className="card-text">{p.title}</p>
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div className="btn-group">
                                                                <button type="button"
                                                                        className="btn btn-sm btn-outline-secondary"
                                                                        onClick={() => like(p.id)}
                                                                >
                                                                    Piku
                                                                </button>
                                                            </div>
                                                            <small className="text-muted">{p.likes} pikus</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                        {(restime===false && number===0) &&　<PageNotFound/>}
                        {/*<Route path="*" element={<Navigate replace to={"pagenotfound"}/>}></Route>*/}
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};

export default Home;