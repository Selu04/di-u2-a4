const poem = {
    lines: [
      'Escribo, borro y reescribo',
      'Borro de nuevo, y luego',
      'Florece una amapola.'
    ]
  };
  
  export default function Poem() {
    return (
      <article>
        {poem.lines.map((line, index) =>
          <div key={index}>
            {index != 0 && <hr></hr>}
            <p>
              {line}
            </p>
          </div>
        )}
      </article>
    );
  }
  