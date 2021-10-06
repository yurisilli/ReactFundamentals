import "./App.css";
import React from "react";

import First from "./components/basics/First";
import WithParameters from "./components/basics/WithParameters";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import AnotherFamily from "./components/basics/AnotherFamily";
import AnotherFamilyMember from "./components/basics/AnotherFamilyMember";
import StudentsList from "./components/repeats/StudentsList";
import ProductsTable from "./components/repeats/ProductsTable";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import UserInfo from "./components/conditional/UserInfo";
import DirectFather from "./components/comunication/DirectFather";
import IndirectFather from "./components/comunication/IndirectFather";
import Input from "./components/forms/Input";
import Counter from "./components/counter/Counter";
import PrizeNumbers from "./components/prize/PrizeNumbers";

const App = (props) => (
    <div className="App">
        <h1>React Fundamentals</h1>

        <div className="Cards">
            <Card title="15. Prize Numbers Generator" color="#154360">
                <PrizeNumbers />
            </Card>

            <Card title="14. Counter" color="#E6B0AA">
                <Counter initialNumber={0}></Counter>
            </Card>

            <Card title="13. Controlled with useState" color="#D4AC0D">
                <Input></Input>
            </Card>

            <Card title="12. Indirect Father and Son" color="#F5CBA7">
                <IndirectFather />
            </Card>

            <Card title="11. Direct Father and Son" color="#7FB3D5">
                <DirectFather />
            </Card>

            <Card title="10. Conditional Display" color="#A2D9CE">
                <UserInfo user={{ name: "Yuri" }} />
                <UserInfo user={{ email: "yuri@barbosa.com" }} />
                <UserInfo user={{}} />
            </Card>

            <Card title="9. Even or Odd" color="#A569BD">
                <EvenOrOdd number={1} />
                <EvenOrOdd number={2} />
            </Card>

            <Card title="8. Products Table" color="#C0392B">
                <ProductsTable />
            </Card>

            <Card title="7. Students List" color="#154360">
                <StudentsList />
            </Card>

            <Card title="6. Another Family" color="#D4AC0D">
                <AnotherFamily surname="Barbosa">
                    <AnotherFamilyMember name="Yuri" />
                    <AnotherFamilyMember name="Juliana" />
                    <AnotherFamilyMember name="Dante" />
                </AnotherFamily>
            </Card>

            <Card title="5. Family" color="#E6B0AA">
                <Family surname="Barbosa" />
            </Card>

            <Card title="4. Random Value" color="#F5CBA7">
                <Random min={1} max={60} />
            </Card>

            <Card title="3. Fragment" color="#A2D9CE">
                <Fragment />
            </Card>

            <Card title="2. With Parameters" color="#D2B4DE">
                <WithParameters
                    title="Second Component"
                    subtitle="Goodbye"
                    number={1}
                />
            </Card>

            <Card title="1. First" color="#7FB3D5">
                <First />
            </Card>
        </div>
    </div>
);

export default App;
