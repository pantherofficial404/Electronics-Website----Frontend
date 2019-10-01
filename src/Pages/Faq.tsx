import React, { Component } from 'react'

export default class Faq extends Component {
  render() {
    return (
      <div>
        <div className="slider headerContainer aboutHeader">
          <p>FAQ</p>
        </div>
        <div className="faqContainer">
          <p className="faqHeader">Frequently Asked Questions</p>
          <div className="row">
            <div className="col s12 m6">
              <div className="questionContainer">
                <p>1. Will I be receiving batteries that are charged?</p>
                <p>The batteries you will be receiving will be completely charged. They will be ready to use the moment they
              are installed .</p>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="questionContainer">
                <p>2. Who will be taking care of After Sales Service once I receive the battery?</p>
                <p>If you have bought a battery from us and if it faces some kind of issue in its warranty period, then we
              are there for you.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="questionContainer">
                <p>3. Will there be any hidden charges like Service Tax for the battery purchase I make?</p>
                <p>The prices of the batteries and the inverters are fixed and it includes everything. They do not contain
                  any kind of hidden
                  costs, service taxes or any sort of extra charges. You will pay the exact amount you see on the website.
            </p>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="questionContainer">
                <p>4. What are the general reasons that make a car battery weak?</p>
                <p>There are various reasons for the weakening of a car battery. You need to know what they are. This way,
                  you can maintain it properly and increase its longevity. The most common reason for a battery to fail is
                  driving in a rough or rash way. Using the power of the battery massively for things like air-conditioning,
              music system, lighting also makes the battery weak.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="questionContainer">
                <p>5. How will I know that my car battery is facing problems and needs to be repaired?</p>
                <p>There are some general signs which indicate you that the battery of your car is getting old. This is the
              moment you will know that you need to buy a replacement. Those signs are:</p>
                <ul>
                  <li>The car cabin will stop cooling properly causing heating issues.
              </li>
                  <li>The different electrical devices that are in the car will stop functioning properly.</li>
                  <li>The headlights of your car start to look dim or dull whenever your car is at idle and then it starts
                to brighten when you rev the car’s engine.</li>
                  <li>You will see a face a lot of problems whenever you are trying to start/ignite the engine of your car.
              </li>
                </ul>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="questionContainer">
                <p>6. How is it possible for me to maintain the battery of my car?</p>
                <p>If you learn to properly maintain the battery of your car, you will be able to increase the battery’s
                  performance and, of course, its life. You just have to follow these important tips to make sure that your
                  car battery’s longevity is maintained. But just remember to carefully follow them because if you don’t
              follow it properly, you may face hazardous and dangerous problems.</p>
                <ul>
                  <li>Regularly clean the dust from the battery of your car to avoid corrosion. You have to clean the
                battery surface and the case too.</li>
                  <li> Even then if you find some sort of corrosion in the battery of your car, clean it off by using the
                solution of baking soda.</li>
                  <li>Keep inspecting for different sorts of damages in the battery. Also, make sure it is always fully
                charged. Do not forget the wires which connect the battery completely clean.</li>
                  <li>Lubricate the battery cables with Vaseline or any other petroleum jelly regularly.</li>
                  <li>If the car battery is in an idle condition, switch off all the electronic devices.</li>
                  <li>Make sure the battery’s fluid level is always full. Keep checking it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
