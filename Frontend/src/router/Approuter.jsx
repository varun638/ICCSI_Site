import { BrowserRouter, Route, Routes } from "react-router";

import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import { Toaster } from "react-hot-toast";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import OrgComit from "../Components/About/OrgComit";
import Editorial from "../shared/components/about/Editorial";
import ConferenceTracks from "../Components/Authordesk/ConferenceTracks";
import ComingSoon from "../shared/components/Authors/ComingSoon";
import KeyDates from "../Components/Authordesk/KeyDates";
import RegistrationDetails from "../Components/Authordesk/RegistrationDetails";
import SubmitPaper from "../shared/components/Authors/SubmitPaper";
import Scopeconference from "../shared/components/about/Scopeconference";



export default function Approuter() {
  return (
    <div>
        <BrowserRouter>
        <div className="flex flex-col min-h-screen">
            <Routes>
                <Route element={<Main />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/scope_conference" element={<Scopeconference />}/>
                <Route path="/organizing_committee" element={<OrgComit />}/>
                <Route path="/editorial_board" element={<Editorial />}/>
                <Route path="/conference_tracks" element={<ConferenceTracks />}/>
                <Route path="/author/journal_publication" element={<ComingSoon />}/>
                <Route path="/author/key_dates" element={<KeyDates />}/>
                <Route path="/author/registration_details" element={<RegistrationDetails />}/>
                <Route path="/author/new_paper_submission" element={<SubmitPaper />}/>
                </Route>
            </Routes>
            </div>
            <Toaster />
        </BrowserRouter>
    </div>
  )
}
