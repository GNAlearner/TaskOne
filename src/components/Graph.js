import React, {useContext} from 'react'
import HeatmapGrid from 'react-heatmap-grid';
import UsersContext from '../Context/UsersContext';

const Graph = () => {
    const context = useContext(UsersContext);
    const { userData } = context;
    // Since I didnt have data about camera capture, I assigned random data
    const data = [
        [10, 5, 15, 8, 20, 12, 8, 20, 12],
        [8, 20, 12, 10, 5, 15, 10, 5, 15],
        [10, 5, 15, 8, 20, 12, 8, 20, 12],
        [8, 20, 12, 10, 5, 15, 10, 5, 15],
        [10, 5, 15, 8, 20, 12, 8, 20, 12],
        [8, 20, 12, 10, 5, 15, 10, 5, 15]
    ];

    const xLabels = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
    const yLabels = userData.map((ele)=>{return ele.name});

  return (
    <div style={{
        marginTop: "4vh",
        marginLeft: "2vw",
        marginBottom: "4vh"
    }}>
        <h5>Camera Analysis</h5>
        <div style={{
            border: "0.5px solid #eaeaea",
            borderRadius: "5px",
            marginRight: "2vw"
            }}>
        <HeatmapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"bottom"}
        xLabelWidth={10}
        yLabelWidth={150}/>
        </div>
    </div>
  )
}

export default Graph