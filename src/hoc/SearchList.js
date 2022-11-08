import React, { useState, useEffect } from "react";

function SearchListHOC(WrappedComponent, entity) {
    return function SearchListHOC(props) {
        const [data, setData] = useState([]);
        const [term, setTerm] = useState("");
        const [filteredData, setFilteredData] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(
                    `http://jsonplaceholder.typicode.com/${entity}`
                );
                const data = await response.json();
                setData(data);
            };
            fetchData();
        }, []);
        useEffect(() => {
            let filteredData = data.filter((d) => {
                if (entity === "users") {
                    return d.name.includes(term);
                } else if (entity === "posts") {
                    return d.title.includes(term);
                }
            });
            setFilteredData(filteredData);
        }, [data, term]);
        return (
            <div>
                <h3>{entity}</h3>
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <WrappedComponent data={filteredData}></WrappedComponent>
            </div>
        );
    };
    // return class extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             data: [],
    //             term: "",
    //         };
    //     }
    //     componentDidMount() {
    //         const fetchData = async () => {
    //             const response = await fetch(
    //                 `http://jsonplaceholder.typicode.com/${entity}`
    //             );
    //             const data = await response.json();
    //             this.setState({ ...this.state, data });
    //         };
    //         fetchData();
    //     }
    //     render() {
    //         const { data, term } = this.state;
    //         let filteredData = data.filter((d) => {
    //             if (entity === "users") {
    //                 return d.name.includes(term);
    //             } else if (entity === "posts") {
    //                 return d.title.includes(term);
    //             }
    //         });
    //         return (
    //             <div>
    //                 <h3>{entity}</h3>
    //                 <input
    //                     type="text"
    //                     value={term}
    //                     onChange={(e) =>
    //                         this.setState({
    //                             ...this.state,
    //                             term: e.target.value,
    //                         })
    //                     }
    //                 />
    //                 <WrappedComponent data={filteredData}></WrappedComponent>
    //             </div>
    //         );
    //     }
    // };
}
export default SearchListHOC;
