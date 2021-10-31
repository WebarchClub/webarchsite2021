import classes from "./Footer.module.css";
import footerImg from "../../files/footer/footer.svg";
import { Link } from "react-router-dom";
import $ from "jquery";

const Footer = ({alt}) => {

  $(document).on('focus', 'input, textarea', function() {
    $("footer").hide();
  });

  $(document).on('blur', 'input, textarea', function() {
    $("footer").show();
  });

  return (
    <footer className={alt ? classes.footerDiv+" alt" : classes.footerDiv}>
      <div className={classes.footerContainer}>
        <div className={classes.illustration}>
          <img src={footerImg} alt="illustration" />
        </div>
        <div>
          <div className={classes.exploreContainer}>
            <ul className={classes.explore}>
              <h3>Explore</h3>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/#About" >About Us</Link></li>
              <li><Link to="/team" >Team</Link></li>
              <li><Link to="/#Contact" >ContactUs</Link></li>
            </ul>
            <ul className={classes.contact}>
              <h3>Reach Us</h3>
              <li>
                <a href="mailto:webarchclub@gmail.com">
                  <i className="fas fa-envelope"></i>
                  webarchclub@gmail.com
                </a>
              </li>
              <li>
                <a href="tele:9549954599">
                  <i className="fas fa-phone-alt"></i>
                  +91 9549954599
                </a>
              </li>
            </ul>
            <div className={classes.iconsContainer}>
              <h3>Follow Us</h3>
              <ul className={classes.socialLinks}>
                <li>
                  <a
                    className={classes.insta}
                    href="https://www.instagram.com/webarchclub"
                  >
                    <i className={"fab fa-instagram"}></i>
                  </a>
                </li>
                <li>
                  <a
                    className={classes.linkedin}
                    href="https://www.linkedin.com/company/webarchclub/"
                  >
                    <i className={"fab fa-linkedin"}></i>
                  </a>
                </li>
                <li>
                  <a
                    className={classes.github}
                    href="https://github.com/WebarchClub"
                  >
                    <i className={"fab fa-github"}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.msgContainer}>
        <p>
          Developed With <i className="fas fa-heart"></i> By Team Webarch{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
