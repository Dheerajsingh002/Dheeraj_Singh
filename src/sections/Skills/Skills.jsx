import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="React js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="BootStrap" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Github" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Sql" />
        <SkillList src={checkMarkIcon} skill="Mongodb" />
        <SkillList src={checkMarkIcon} skill="Firebase" />
        <SkillList src={checkMarkIcon} skill="saas" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
