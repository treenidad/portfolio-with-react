import React, {useState, useRef} from "react"
import CustomHook from "./CustomHook"

const Contacts = () => {
  const [listContacts] = useState([
    // {
    //   title: 'Phone Number',
    //   value: '123-456-7890'
    // },
    {
      title: 'Email',
      value: 'kevintrinidad.dev@gmail.com'
    },
    {
      title: 'GitHub',
      value: 'https://github.com/treenidad'
    }
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Want to collaborate? Let's get in touch!
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
