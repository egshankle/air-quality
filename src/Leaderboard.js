import React from 'react';

class Leaderboard extends React.Component {

    render() {
        return (
                <div className="Leaderboard">
                <table className="usersTable">
                <th> This Week's Individuals of Air Quality </th>
                <tbody>
                    <tr className="columnInfo">
                        <td><b>Users</b></td>
                        <td><b>Rank</b></td>
                        <td><b>A.Q.D's</b></td>
                    </tr>
                    <tr>
                        <td>JamesTheRunner</td>
                        <td>1</td>
                        <td>68</td>
                    </tr>
                    <tr>
                        <td>CycleQueen24</td>
                        <td>2</td>
                        <td>62</td>
                    </tr>
                    <tr>
                        <td>SwiftManhattan</td>
                        <td>3</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td>PizzaDude</td>
                        <td>4</td>
                        <td>55</td>
                    </tr>
                    <tr>
                        <td>OnMyFeet2019</td>
                        <td>5</td>
                        <td>54</td>
                    </tr>
                </tbody>    
                </table>

                <br />
                <br />

                <table className="companiesTable">
                <th> This Week's Companies of Air Quality </th>
                <tbody>
                    <tr className="columnInfo">
                        <td><b>Company Sponsor</b></td>
                        <td><b>Rank</b></td>
                        <td><b>Collective A.Q.D's</b></td>
                    </tr>
                    <tr>
                        <td>AirMonitor</td>
                        <td>1</td>
                        <td>68</td>
                    </tr>
                    <tr>
                        <td>Appmosfera</td>
                        <td>2</td>
                        <td>62</td>
                    </tr>
                    <tr>
                        <td>DIY</td>
                        <td>3</td>
                        <td>60</td>
                    </tr>
                </tbody>    
                </table>

                </div>
        );
    }
}

export default Leaderboard;
