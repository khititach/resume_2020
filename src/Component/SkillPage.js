import React from 'react'

import { DataEn } from './DataEn'

import sakuraLogo from '../Image/Logo/sakura-logo.png'

function SkillPage () {
    return (
        <div id="skill" className="App-header-skillpage">
           <div className="bg-blur-skillpage">
                <div className="bg-skillpage">
                    {/* <div className="title-skill">
                        SKiLL
                    </div> */}
                    <div className="table-level-skill">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="5" className="table-skill-text">CODiNG SKiLL</th>
                                </tr>
                            </thead>
                            <tbody className="level-text-tr">
                                <tr>
                                    <td></td>
                                    <td><span className="level-text">LEARNiNG</span></td>
                                    <td><span className="level-text">BEGiNNER</span></td>
                                    <td><span className="level-text">iNTERMiDiATE</span></td>
                                    <td><span className="level-text">ADVANCED</span></td>
                                </tr>
                                
                            {/* Coding skill */}
                           
                            {DataEn.Skill.CodingSkill.map((item,index) => {
                                let level1 , level2 , level3 , level4  ;
                                
                                if (item.level === 'LEARNiNG') {
                                    // level1 = item.level;
                                    level1 = sakuraLogo
                                }
                                else if (item.level === 'BEGiNNER') {
                                    // level2 = item.level;
                                    level1 = sakuraLogo
                                    level2 = sakuraLogo
                                }
                                else if (item.level === 'iNTERMiDiATE') {
                                    // level3 = item.level;
                                    level1 = sakuraLogo
                                    level2 = sakuraLogo
                                    level3 = sakuraLogo
                                }
                                else if (item.level === 'ADVANCED') {
                                    // level4 = item.level;
                                    level1 = sakuraLogo
                                    level2 = sakuraLogo
                                    level3 = sakuraLogo
                                    level4 = sakuraLogo
                                }
                                
                                return(
                                    <tr key={index}>
                                        <td><img className="logo-level-skill" alt="" key={index} src={item.image} /></td>
                                        <td><img className="logo-level" alt="" key={index} src={level1} /></td>
                                        <td><img className="logo-level" alt="" key={index} src={level2} /></td>
                                        <td><img className="logo-level" alt="" key={index} src={level3} /></td>
                                        <td><img className="logo-level" alt="" key={index} src={level4} /></td>
                                       
                                    </tr> 
                                )
                               
                            })}
                           
                            
                            {/* Language skill */}
                           
                                <tr>
                                    <th colSpan="5" className="table-skill-text">LANGUAGE </th>
                                </tr>
                           
                                <tr>
                                     <td></td>
                                    <td><span className="level-text">LEARNiNG</span></td>
                                    <td><span className="level-text">BEGiNNER</span></td>
                                    <td><span className="level-text">iNTERMiDiATE</span></td>
                                    <td><span className="level-text">ADVANCED</span></td>
                                </tr>

                               
                            {Object.keys(DataEn.Skill.LanguageSkill).map((item,index)=>{
                                let langSkill = DataEn.Skill.LanguageSkill
                                let level1 , level2 , level3 , level4  ;
                                
                                if (langSkill[item].AllLevel === 'LEARNiNG') {
                                    // level1 = item.level;
                                    level1 = sakuraLogo
                                }
                                else if (langSkill[item].AllLevel === 'BEGiNNER') {
                                    // level2 = item.level;
                                    level1 = sakuraLogo
                                    level2 = sakuraLogo
                                }
                                else if (langSkill[item].AllLevel === 'iNTERMiDiATE') {
                                    // level3 = item.level;
                                    level1 = sakuraLogo
                                    level2 = sakuraLogo
                                    level3 = sakuraLogo
                                }
                                else if (langSkill[item].AllLevel === 'ADVANCED') {
                                    // level4 = item.level;
                                    level1 = sakuraLogo
                                    level2 = sakuraLogo
                                    level3 = sakuraLogo
                                    level4 = sakuraLogo
                                }
                                  return(
                                      <tr key={index}>
                                        <td><span className="level-lang-name-text-skill" alt=""  key={index}>{Object.keys(langSkill)[index]}</span></td>
                                        <td><img className="logo-level" alt="" key={index} src={level1} /></td>
                                        <td><img className="logo-level" alt="" key={index} src={level2} /></td>
                                        <td><img className="logo-level" alt="" key={index} src={level3} /></td>
                                        <td><img className="logo-level" alt="" key={index} src={level4} /></td>
                                      </tr> 
                                  )
                                 
                            })}
{/* 
                            <tr className="level-text-scale-tr">
                                <td colSpan='5'>
                                    <span className="level-text-scale">L = LEARNiNG</span>
                                    <span className="level-text-scale">B = BEGiNNER</span>
                                    <span className="level-text-scale">i = iNTERMiDiATE</span>
                                    <span className="level-text-scale">A = ADVANCED</span>
                                </td>
                            </tr> */}

                            </tbody>
                        </table>
                    </div>
                </div>
               
               
           </div>
           
        </div>
    ) 
}


export default SkillPage;