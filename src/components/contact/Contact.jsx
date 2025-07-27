import styles from './Contact.module.css';
const Contact = () => {
  console.log(styles);
  return (
    <div className={`${styles.contact} container`}>
      <h1>Contact Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis fuga, magni voluptatem beatae sit perferendis, consequuntur voluptates perspiciatis repudiandae esse alias excepturi expedita aut nam facilis est maiores! Laudantium, eaque.</p>
    </div>
  )
}

export default Contact;