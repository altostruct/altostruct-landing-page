import styles from "./LinkedIn.module.scss"

const LinkedIn = () => {
  //Homemade uuid
  const containerId = "84728f33-f5ba-444d-813e-582933944b9f";
  const imageId = "60faa555-2a3f-41ad-a7ea-6cab2266dfa1";
 /* const onEnter = () => {
    const image = document.getElementById(imageId);
    image?.classList.remove(styles.hidden);
  }

  const onExit = () => {
    const image = document.getElementById(imageId);
    image?.classList.add(styles.hidden);
  }*/

  return (
    <div className={[styles.container].join(' ')} id={containerId}>
      <a  href="https://www.linkedin.com/company/altostruct/" target="_blank">
        <img className={[styles.image].join(' ')} src="linkedin.svg" alt="Linkedin" id={imageId} />
      </a>
    </div>
  )
}
export default LinkedIn;