import React, { useState } from "react";
import { useMemo } from "react";
import styles from "./project.module.css";

const ProjectSerach = () => {
  let names = [
    "Lia",
    "Olivia",
    "Noah",
    "Emma",
    "Oliver",
    "Charlotte",
    "Elijah",
    "Amelia",
    "James",
    "Ava",
    "William",
    "Sophia",
    "Benjamin",
    "Isabella",
    "Lucas",
    "Mia",
    "Henry",
    "Evelyn",
    "Theodore",
    "Harper",
  ];
  let result = [];
  let searchData = (letters) => {
    result = names.filter((name) => {
      let lettersLength = letters?.length;
      if (lettersLength > 0) {
        return name.toLowerCase().indexOf(letters) >= 0;
      }
    });
  };

  const [letters, setLetters] = useState("");
  useMemo(() => searchData(letters), [letters]);
  return (
    <div className={styles.mainContainer}>
      <div>{`Result: ${result.length}`}</div>
      <input
        onChange={(e) => {
          setLetters(e.target.value);
        }}
        value={letters}
      />
      <div>
        {result?.map((name) => (
          <div key={name}>
            {name.indexOf(letters) > 0 ? (
              <div>
                <span>{name.slice(0, name.indexOf(letters))}</span>
                <span className={styles.marked}>
                  {name.slice(
                    name.indexOf(letters),
                    name.indexOf(letters) + letters.length
                  )}
                </span>
                <span>
                  {name.slice(
                    name.indexOf(letters) + letters.length,
                    name.length
                  )}
                </span>
              </div>
            ) : (
              <div>
                <span className={styles.marked}>
                  {name.slice(0, letters.length)}
                </span>
                <span>{name.slice(letters.length, name.length)}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSerach;
