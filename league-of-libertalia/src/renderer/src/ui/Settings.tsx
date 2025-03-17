import React, { useState } from 'react';
import './Settings.css'; 
import './IMG/bg.png';

const Settings = () => {
    // state variables to manage toggle switches for settings
    const [clientHookEnabled, setClientHookEnabled] = useState(false);
    const [showSummonerNamesEnabled, setShowSummonerNamesEnabled] = useState(false);
    const [autoPickEnabled, setAutoPickEnabled] = useState(false);

    // toggle functions to switch the state of each setting
    const toggleClientHook = () => setClientHookEnabled(!clientHookEnabled);
    const toggleShowSummonerNames = () => setShowSummonerNamesEnabled(!showSummonerNamesEnabled);
    const toggleAutoPick = () => setAutoPickEnabled(!autoPickEnabled);

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="row mb-3">
                <div className="col-8">
                    <h4>Client Hook</h4>
                    <p>Possibilita a interceptação e modificação de dados do client.</p>
                </div>
                <div className="col-4 text-end d-flex">
                    {/* toggle switch for enabling/disabling the client hook */}
                    <div className="form-check form-switch ms-auto">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={clientHookEnabled} 
                            onChange={toggleClientHook} 
                            id="clientHookToggle" 
                        />
                        <label className="form-check-label" htmlFor="clientHookToggle"></label>
                    </div>
                </div>
                <hr />
            </div>
            <div className="row mb-3">
                <div className="col-8">
                    <h4>Exibir Nomes de Invocador</h4>
                    <p>Exibe o nome de todos os invocadores.</p>
                </div>
                <div className="col-4 text-end d-flex">
                    {/* toggle switch for showing summoner names */}
                    <div className="form-check form-switch ms-auto">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={showSummonerNamesEnabled} 
                            onChange={toggleShowSummonerNames} 
                            id="showSummonerNamesToggle" 
                        />
                        <label className="form-check-label" htmlFor="showSummonerNamesToggle"></label>
                    </div>
                </div>
                <hr />
            </div>
            <div className="row mb-3">
                <div className="col-8">
                    <h4>Auto-Pick</h4>
                    <p>Serve para selecionar o champion automaticamente.</p>
                </div>
                <div className="col-4 text-end d-flex">
                    {/* toggle switch for enabling/disabling auto-pick*/}
                    <div className="form-check form-switch ms-auto">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={autoPickEnabled} 
                            onChange={toggleAutoPick} 
                            id="autoPickToggle" 
                        />
                        <label className="form-check-label" htmlFor="autoPickToggle"></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
