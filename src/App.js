import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
    <div className="main-wrapper">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" width={35} height={35} alt="" />{" "}
            <span>Crypto</span>
          </a>
        </div>
        <a id="toggle_btn">
          <i className="fas fa-bars" />
        </a>
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <span className="input-group-text">
              <i className="fas fa-search" />
            </span>
          </div>
        </form>
        <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar">
          <i className="fas fa-bars" />
        </a>
        <ul className="nav user-menu float-right">
          <li className="nav-item dropdown d-none d-sm-block">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="far fa-bell" />{" "}
              <span className="badge badge-pill bg-danger float-right">1</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span>Notifications</span>
              </div>
              <div className="drop-scroll">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img
                            alt="John Doe"
                            src="assets/img/user.jpg"
                            className="img-fluid rounded-circle"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added new
                            task <span className="noti-title" />
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">V</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>{" "}
                            changed the task name <span className="noti-title" />
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">L</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span> added{" "}
                            <span className="noti-title">Domenic Houston</span>{" "}
                            and <span className="noti-title">Claire Mapes</span>{" "}
                            to project <span className="noti-title"> module</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">G</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Rolland Webber</span>{" "}
                            completed task <span className="noti-title" />
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">V</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Bernardo Galaviz</span>{" "}
                            added new task{" "}
                            <span className="noti-title">
                              Private chat module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">2 days ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown has-arrow">
            <a
              href="#"
              className="dropdown-toggle nav-link user-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="assets/img/user-02.jpg"
                  width={40}
                  alt="Admin"
                />
              </span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="edit-profile.html">
                Edit Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
        </ul>
        <div className="dropdown mobile-user-menu float-right">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="edit-profile.html">
              Edit Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              Settings
            </a>
            <a className="dropdown-item" href="login.html">
              Logout
            </a>
          </div>
        </div>
      </div>



      {/* /Header */}




      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Main</li>
              <li>
                <a href="index.html">
                  <p className="material-icons m-0">pie_chart_outline</p>{" "}
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="wallet.html">
                  <p className="material-icons m-0">credit_card</p>
                  <span>My Wallet</span>
                </a>
              </li>
              <li>
                <a href="transactions.html">
                  <p className="material-icons m-0">credit_score</p>
                  <span>Transaction</span>
                </a>
              </li>
              <li className="active">
                <a href="exchange.html">
                  <i className="fas fa-coins" />
                  <span>Exchange</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-shopping-cart" aria-hidden="true" />{" "}
                  <span> Buy &amp; Sell </span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="buy-crypto.html">Buy Crypto</a>
                  </li>
                  <li>
                    <a href="sell-crypto.html">Sell Crypto</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="trading.html">
                  <i className="fas fa-chart-line" aria-hidden="true" />{" "}
                  <span>Trade Book</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <p className="material-icons m-0">grid_view</p>{" "}
                  <span> Apps </span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="chat.html">
                      <i className="fas fa-comments" /> <span>Chat</span>{" "}
                      <span className="badge badge-pill text-white bg-primary float-right">
                        5
                      </span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fas fa-video camera" /> <span> Calls</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="voice-call.html">Voice Call</a>
                      </li>
                      <li>
                        <a href="video-call.html">Video Call</a>
                      </li>
                      <li>
                        <a href="incoming-call.html">Incoming Call</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="calendar.html">
                      <i className="fas fa-calendar-alt" /> <span>Calendar</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fas fa-envelope" /> <span> Email</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="compose.html">Compose Mail</a>
                      </li>
                      <li>
                        <a href="inbox.html">Inbox</a>
                      </li>
                      <li>
                        <a href="mail-view.html">Mail View</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-calculator" /> <span> Accounts </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="payments.html">Payments</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses</a>
                  </li>
                  <li>
                    <a href="taxes.html">Taxes</a>
                  </li>
                  <li>
                    <a href="provident-fund.html">Provident Fund</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="calendar.html">
                  <i className="far fa-calendar" /> <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="activities.html">
                  <i className="fas fa-network-wired" /> <span>Activities</span>
                </a>
              </li>
              <li>
                <a href="invoices.html">
                  <i className="fas fa-book" /> <span>Invoice</span>
                </a>
              </li>
              <li>
                <a href="market.html">
                  <i className="fas fa-rocket" aria-hidden="true" />{" "}
                  <span>Marketcap</span>
                </a>
              </li>
              <li>
                <a href="transactions.html">
                  <i className="fas fa-retweet" aria-hidden="true" />{" "}
                  <span>Transactions</span>
                </a>
              </li>
              <li>
                <a href="wallet.html">
                  <i className="fas fa-briefcase" aria-hidden="true" />{" "}
                  <span>Wallet</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-user" /> <span> Employees </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="employees.html">Employees List</a>
                  </li>
                  <li>
                    <a href="leaves.html">Leaves</a>
                  </li>
                  <li>
                    <a href="holidays.html">Holidays</a>
                  </li>
                  <li>
                    <a href="attendance.html">Attendance</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-book" /> <span> Payroll </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="salary.html"> Employee Salary </a>
                  </li>
                  <li>
                    <a href="salary-view.html"> Payslip </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-file-invoice" /> <span> Reports </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="expense-reports.html"> Expense Report </a>
                  </li>
                  <li>
                    <a href="invoice-reports.html"> Invoice Report </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="settings.html">
                  <i className="fas fa-cog" /> <span>Settings</span>
                </a>
              </li>
              <li className="menu-title">UI Elements</li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-laptop" /> <span> Components</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="uikit.html">UI Kit</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="tabs.html">Tabs</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-cube" /> <span> Elements</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="sweetalerts.html">Sweet Alerts</a>
                  </li>
                  <li>
                    <a href="tooltip.html">Tooltip</a>
                  </li>
                  <li>
                    <a href="popover.html">Popover</a>
                  </li>
                  <li>
                    <a href="ribbon.html">Ribbon</a>
                  </li>
                  <li>
                    <a href="clipboard.html">Clipboard</a>
                  </li>
                  <li>
                    <a href="drag-drop.html">Drag &amp; Drop</a>
                  </li>
                  <li>
                    <a href="rangeslider.html">Range Slider</a>
                  </li>
                  <li>
                    <a href="rating.html">Rating</a>
                  </li>
                  <li>
                    <a href="toastr.html">Toastr</a>
                  </li>
                  <li>
                    <a href="text-editor.html">Text Editor</a>
                  </li>
                  <li>
                    <a href="counter.html">Counter</a>
                  </li>
                  <li>
                    <a href="scrollbar.html">Scrollbar</a>
                  </li>
                  <li>
                    <a href="spinner.html">Spinner</a>
                  </li>
                  <li>
                    <a href="notification.html">Notification</a>
                  </li>
                  <li>
                    <a href="lightbox.html">Lightbox</a>
                  </li>
                  <li>
                    <a href="stickynote.html">Sticky Note</a>
                  </li>
                  <li>
                    <a href="timeline.html">Timeline</a>
                  </li>
                  <li>
                    <a href="horizontal-timeline.html">Horizontal Timeline</a>
                  </li>
                  <li>
                    <a href="form-wizard.html">Form Wizard</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-award" /> <span> Icons</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="icon-fontawesome.html">Fontawesome Icons</a>
                  </li>
                  <li>
                    <a href="icon-feather.html">Feather Icons</a>
                  </li>
                  <li>
                    <a href="icon-ionic.html">Ionic Icons</a>
                  </li>
                  <li>
                    <a href="icon-material.html">Material Icons</a>
                  </li>
                  <li>
                    <a href="icon-pe7.html">Pe7 Icons</a>
                  </li>
                  <li>
                    <a href="icon-simpleline.html">Simpleline Icons</a>
                  </li>
                  <li>
                    <a href="icon-themify.html">Themify Icons</a>
                  </li>
                  <li>
                    <a href="icon-weather.html">Weather Icons</a>
                  </li>
                  <li>
                    <a href="icon-typicon.html">Typicon Icons</a>
                  </li>
                  <li>
                    <a href="icon-flag.html">Flag Icons</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fab fa-wpforms" /> <span> Forms</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="form-basic-inputs.html">Basic Inputs</a>
                  </li>
                  <li>
                    <a href="form-input-groups.html">Input Groups</a>
                  </li>
                  <li>
                    <a href="form-horizontal.html">Horizontal Form</a>
                  </li>
                  <li>
                    <a href="form-vertical.html">Vertical Form</a>
                  </li>
                  <li>
                    <a href="form-mask.html">Form Mask </a>
                  </li>
                  <li>
                    <a href="form-validation.html">Form Validation </a>
                  </li>
                  <li>
                    <a href="form-select2.html">Form Select2 </a>
                  </li>
                  <li>
                    <a href="form-fileupload.html">File Upload </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-table" /> <span> Tables</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tables-basic.html">Basic Tables</a>
                  </li>
                  <li>
                    <a href="tables-datatables.html">Data Table</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-chart-area" aria-hidden="true" />
                  <span> Charts</span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="morris.html">Morris chart</a>
                  </li>
                  <li>
                    <a href="chartjs.html">Am4charts</a>
                  </li>
                  <li>
                    <a href="chart-apex.html">Apex Charts</a>
                  </li>
                  <li>
                    <a href="chart-js.html">Chart Js</a>
                  </li>
                  <li>
                    <a href="chart-flot.html">Flot Charts</a>
                  </li>
                  <li>
                    <a href="chart-peity.html">Peity Charts</a>
                  </li>
                  <li>
                    <a href="chart-c3.html">C3 Charts</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">Extras</li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-columns" /> <span>Pages</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="login.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="change-password2.html"> Change Password </a>
                  </li>
                  <li>
                    <a href="lock-screen.html"> Lock Screen </a>
                  </li>
                  <li>
                    <a href="profile.html"> Profile </a>
                  </li>
                  <li>
                    <a href="error-404.html">404 Error </a>
                  </li>
                  <li>
                    <a href="error-500.html">500 Error </a>
                  </li>
                  <li>
                    <a href="blank-page.html"> Blank Page </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="fas fa-share-alt" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <span>Level 1</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span> <span className="menu-arrow" />
                        </a>
                        <ul style={{ display: "none" }}>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Sidebar */}




      {/* Content */}
      <div className="page-wrapper exchange-wrapper bg-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="crypto-exchange buy-form">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="page-title mb-0">Cryptocurrency Exchange </h4>
                  </div>
                </div>
                <div className="">
                  <div className="card-title text-center">
                    <h4 className="text-primary">
                      Exchange Cryptocurrency at the Crypto
                    </h4>
                  </div>
                  <p className="text-center">
                    Transfer from one wallet to another within seconds. It's that
                    simple.
                  </p>
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="exchange-form">
                        <form>
                          <div className="form-row ">
                            <div className="form-group col-lg-6 col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="1.432"
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6">
                              <select className="form-control select">
                                <option selected="">BTC</option>
                                <option>Ethereum</option>
                                <option>Ripple</option>
                                <option>Bitcoin</option>
                                <option>Cardano</option>
                                <option>Litecoin</option>
                                <option>NEO</option>
                                <option>Stellar</option>
                                <option>EOS</option>
                                <option>NEM</option>
                              </select>
                            </div>
                            <div className="col-lg-6 col-md-12 offset-lg-3">
                              <button
                                type="button"
                                className="btn btn-primary btn-lg btn-block mb-3"
                              >
                                <i
                                  className="fas fa-exchange-alt"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                            <div className="form-group col-lg-6 col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder={338}
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6">
                              <select className="form-control select">
                                <option selected="">BTC</option>
                                <option>Ethereum</option>
                                <option>Ripple</option>
                                <option>Bitcoin</option>
                                <option>Cardano</option>
                                <option>Litecoin</option>
                                <option>NEO</option>
                                <option>Stellar</option>
                                <option>EOS</option>
                                <option>NEM</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div className="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Richard Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item new-message">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">John Doe</span>
                        <span className="message-time">1 Aug</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Tarah Shropshire </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">M</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Mike Litorus</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Catherine Manseau{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">D</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Domenic Houston </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">B</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Buster Wigton </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Rolland Webber </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Claire Mapes </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">M</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Melita Faucher</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Jeffery Lalor</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">L</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Loren Gatlin</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Tarah Shropshire</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">See all messages</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
  
  );
}

export default App;
