import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import {ProductPage} from "./Products/ProductPage";
import {CategoryArchive} from "./Pages/CategoryArchive";
import Contact from "./Pages/Contact";
import {ProductArchive} from "./Pages/ProductArchive";


const Main = () => (
    <main>
        <Switch onUpdate={() => window.scrollTo(0, 0)}>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/about' component={About}/>
            <Route
                path="/products"
                render={({ match: { url } }) => (
                    <Switch>
                        <Route exact path={`${url}/`} component={CategoryArchive} />
                        <Route path={`${url}/compound-microscopes`} render={()=><ProductArchive type="Compound" />}/>
                        <Route path={`${url}/stereo-microscopes`} render={()=><ProductArchive type="Stereo" />}/>
                        <Route path={`${url}/research-microscopes`} render={()=><ProductArchive type="Research" />}/>
                        <Route path={`${url}/digital-microscopes`} render={()=><ProductArchive type="Digital" />}/>
                        <Route path={`${url}/surgical-microscopes`} render={()=><ProductArchive type="Surgical" />}/>
                        <Route path={`${url}/industrial-microscopes`} render={()=><ProductArchive type="Industrial" />}/>


                        <Route path={`${url}/axe-2000-f`} render={()=><ProductPage name="AXE 2000 F" type="axe-2000-f" />}/>
                        <Route path={`${url}/axe-2000-m`} render={()=><ProductPage name="AXE 2000 M" type="axe-2000-m" />}/>
                        <Route path={`${url}/axe`} render={()=><ProductPage name="AXE" type="axe" />}/>
                        <Route path={`${url}/axe-2000`} render={()=><ProductPage name="AXE 2000" type="axe-2000"/>}/>
                        <Route path={`${url}/axem`} render={()=><ProductPage name="AXE (M)" type="axem" />}/>
                        <Route path={`${url}/axl`} render={()=><ProductPage name="AXL" type="axl" />}/>
                        <Route path={`${url}/ax-20`} render={()=><ProductPage name="AX (20)" type="ax-20"/>}/>
                        <Route path={`${url}/ax-21`} render={()=><ProductPage name="AX 21" type="ax-21" />}/>
                        <Route path={`${url}/axr-20`} render={()=><ProductPage name="AXR 20" type="axr-20" />}/>

                        /** Research Microscopes **/
                        <Route path={`${url}/axr-30`} render={()=><ProductPage name="AXR 30" type="axr-30" />}/>
                        <Route path={`${url}/axr-31`} render={()=><ProductPage name="AXR 31" type="axr-31" />}/>
                        <Route path={`${url}/axr-41`} render={()=><ProductPage name="AXR 41" type="axr-41" />}/>
                        <Route path={`${url}/afl-20`} render={()=><ProductPage name="AFL 20" type="afl-20" />}/>
                        <Route path={`${url}/afl-30`} render={()=><ProductPage name="AFL 30" type="afl-30" />}/>
                        <Route path={`${url}/ixl-40`} render={()=><ProductPage name="IXL 40" type="ixl-40" />}/>
                        <Route path={`${url}/ixl-40FL`} render={()=><ProductPage name="IXL 40FL" type="ixl-40fl" />}/>
                        <Route path={`${url}/ax-POL`} render={()=><ProductPage name="AX POL" type="axr-pol" />}/>

                        /** Industrial Microscopes **/
                        <Route path={`${url}/fe-10`} render={()=><ProductPage name="FE 10" type="fe-10" />}/>
                        <Route path={`${url}/fe-20m`} render={()=><ProductPage name="FE 20 M" type="fe-20m" />}/>
                        <Route path={`${url}/fe-pro-9000`} render={()=><ProductPage name="FE PRO 9000" type="fe-pro-9000" />}/>

                        /** Surgical Microscopes **/
                        <Route path={`${url}/op-10`} render={()=><ProductPage name="OP 10" type="op-10" />}/>
                        <Route path={`${url}/op&-20`} render={()=><ProductPage name="OP& 20" type="op&-20" />}/>
                        <Route path={`${url}/sl-15`} render={()=><ProductPage name="SL 15" type="sl-15" />}/>

                        /** Stereo Microscopes **/
                        <Route path={`${url}/asm-20`} render={()=><ProductPage name="ASM 20" type="asm-20" />}/>
                        <Route path={`${url}/azm-60`} render={()=><ProductPage name="AZM 60" type="azm-60" />}/>
                        <Route path={`${url}/azm-100`} render={()=><ProductPage name="AZM 100" type="azm-100 " />}/>









                        />
                    </Switch>
                )}
            />
            <Route exact path={'/contact'} component={Contact}/>
            <Route component={Homepage}/>
        </Switch>
    </main>
);

export default Main