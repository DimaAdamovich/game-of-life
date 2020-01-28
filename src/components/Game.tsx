import React, {useCallback, useRef, useState} from "react";
import produce from "immer";

const numRows = 40
const numCols = 40
const operations = [
    [0,1],
    [0,-1],
    [1,0],
    [-1,0],
    [1,1],
    [-1,-1],
    [-1,1],
    [1,-1],

]

const generateInitialState = () =>{
    const rows = []
    for (let i = 0; i < numRows; i++) {
        rows.push(Array(numCols).fill(0))
    }
    return rows
}


export const Game: React.FC = () => {
    const [grid, setGrid] = useState(() => generateInitialState())
    const[running, setRunning] = useState(false)
    const runnigRef = useRef(running)
    runnigRef.current = running
    const runningSimulation = useCallback(()=>{
        if(!runnigRef.current) return

        setGrid(g => produce(g, gridCopy => {
                for(let i = 0; i< numCols; i++){
                    for (let j = 0; j< numRows; j++){
                        let neighbours = 0
                        operations.forEach(([x, y])=> {
                            let newI = i + x
                            let newJ = j + y
                            if(newI >= 0 && newJ >= 0 && newI < numRows && newJ < numCols ) {
                                neighbours += g[newI][newJ]
                        }
                        })
                        if(neighbours <2 || neighbours>3) {
                            gridCopy[i][j] = 0
                        } else if(g[i][j] === 0 && neighbours === 3 ) {
                            gridCopy[i][j] = 1
                        }
                        // else if( g[i][j] === 0 && neighbours === 3) {
                        //         gridCopy[i][j] = 1
                        //     }

                    }
                }
            })
        )

        setTimeout(runningSimulation, 500)
    }, [])
    return <div className='text-center'>
        <div >
            <button type="button" className="btn btn-outline-success"
                    onClick={() => {
                        setRunning(!running)
                        if (!runnigRef.current) {
                            runnigRef.current = true
                            runningSimulation()
                        }
                    }}
            >{running ? 'Stop' : 'Start'}</button>
            <button type="button" className="btn btn-outline-danger"
                    onClick={() => setGrid(generateInitialState)}>Clear
            </button>
            <button type="button" className="btn btn-outline-dark"
                    onClick={() => {
                        const rows = []
                        for (let i = 0; i < numRows; i++) {
                            rows.push(
                                Array.from(Array(numCols), () => Math.random() > 0.7 ? 1 : 0))
                        }
                        return setGrid(rows)
                    }}>Random
            </button>
        </div>
        <div className='d-flex justify-content-center pt-4'>
            <div style={{display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px)`}}>
                {grid.map((rows, i) => rows.map((cols, k) =>
                    <div key={`${i}-${k}`}
                         onClick={() => {
                             let newGrid = produce(grid, gridCopy => {
                                 gridCopy[i][k] = grid[i][k] ? 0 : 1
                             })
                             setGrid(newGrid)
                         }}
                         className={grid[i][k]? 'bg-success': ' '}
                         style={{
                             width: 20,
                             height: 20,
                             border: '1px solid black',
                         }}/>
                ))}
            </div>
        </div>
    </div>
}