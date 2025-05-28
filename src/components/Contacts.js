import React, {useState, useRef} from "react"
import CustomHook from "./CustomHook"

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '123-456-7890'
    },
    {
      title: 'Email',
      value: 'kevintrinidad.dev@gmail.com'
    },
    {
      title: 'GitHub',
      value: 'github.com/kevin-trinidad'
    }
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore'
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key)=>(
            <div key={key} className="item">
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default Contacts;
