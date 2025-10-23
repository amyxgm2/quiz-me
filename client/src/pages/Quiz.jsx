import React from 'react'
import '../styles/Quiz.css';

export default function ContactForm() {
  return (
    <section className="contact-wrap">
      <div className="contact-card" role="region" aria-labelledby="contact-heading">  
        <form className="contact-form" method="post" action="#" noValidate>
          
          <div className="grid two">
            <div className="field">
              <label htmlFor="firstName">First name <span aria-hidden="true">*</span></label>
              <input id="firstName" name="firstName" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last name <span aria-hidden="true">*</span></label>
              <input id="lastName" name="lastName" type="text" required />
            </div>
          </div>

          <div className="grid two">
            <div className="field">
              <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
              <input id="email" name="email" type="email" inputMode="email" required />
            </div>
            <div className="field">
              <label htmlFor="org">Organization / Team</label>
              <input id="org" name="org" type="text" placeholder="School, company, or team name" />
            </div>
          </div>

          
          <h2 className="section-title">Quiz Generation Options</h2>
          <p className="section-hint">Choose your preferences for a personalized quiz</p>

          <div className="field select-like">
            <label htmlFor="topic">Topic</label>
            <select id="topic" name="topic" defaultValue="">
              <option value="" disabled>Select a topic</option>
              <option>Mathematics</option>
              <option>Biology</option>
              <option>History</option>
              <option>Programming (JS)</option>
              <option>Finance</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field select-like">
            <label htmlFor="expertise">Expertise</label>
            <select id="expertise" name="expertise" defaultValue="">
              <option value="" disabled>Select level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div className="field select-like">
            <label htmlFor="count">Number of questions</label>
            <select id="count" name="count" defaultValue="5">
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>

          <div className="field select-like">
            <label htmlFor="style">Style of questions</label>
            <select id="style" name="style" defaultValue="normal">
              <option value="normal">normal</option>
              <option value="multiple-choice">multiple choice</option>
              <option value="true-false">true / false</option>
              <option value="mixed">mixed</option>
              <option value="challenge">challenge</option>
            </select>
          </div>

          
          <div className="field">
            <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Add any details about data sources, LMS/HRIS integrations, or evaluation goals."
            />
          </div>

          
          <div className="consent">
            <label className="checkbox">
              <input id="consent" name="consent" type="checkbox" required />
              I agree to the Terms and acknowledge the Privacy Policy.
            </label>
          </div>

          <button type="submit" className="btn-primary">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}