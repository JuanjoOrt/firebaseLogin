import React from 'react';
import Lock from '../Lock.svg';
import User from '../User.svg';


export default function Home() {


    return <div className="background">
        <div className="main-container">
            <div className="form-body">
                <form>
                    <div className="input-editable">
                        <input type="text" placeholder="User"/>
                        <img src={User} />
                    </div>
                    <div className="input-editable">
                        <input type="text" placeholder="Password"/>
                        <img src={Lock} />
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    </div>
}