import Image from "next/image"

export function DetailedServiceInfo() {
  return (
    <section className="py-12">
      <div className="container">
        {/* Preventative Maintenance Section */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="flex items-center justify-center">
            <Image
              src="https://imagescdn.dealercarsearch.com/DealerImages/19018/28912/service1.png"
              alt="Mechanics working on a red car"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-blue-600">PREVENTATIVE MAINTENANCE</h2>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700 mb-4">
                Preventive maintenance may seem like an unnecessary car expense, but it often involves matters that
                you'll have to take care of sooner or later, and paying for them sooner will often be a less expensive
                undertaking. Most important is the fact that preventive maintenance will help keep you and others safe.
                And if you don't keep up with your car's preventive maintenance, you may find yourself stuck or in need
                of repair when you can least afford it.
              </p>
              <p className="text-gray-700">
                Following the scheduled maintenance recommendations in your owner's manual, checking fluid levels
                regularly and changing the fluids and filters periodically can minimize the risks of breakdowns and
                prolong the life of you vehicle.
              </p>
            </div>
          </div>
        </div>

        {/* Auto Diagnostics Section */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-blue-600">AUTO DIAGNOSTICS</h2>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700 mb-4">
                The computer in your vehicle is in constant contact with all of the sensors and most of the electronic
                devices in your vehicle. Anytime the computer detects an abnormal sensor reading, or inoperative sensor,
                it will log the error code and turn on your check engine light.
              </p>
              <p className="text-gray-700 mb-4">
                When your check engine light turns on, your car is trying to communicate in the only way that it can. At
                the most basic level, the check engine light indicates that some sensor, somewhere in your engine,
                exhaust, or transmission, has provided unexpected data to the computer. That could indicate a problem
                with the system the sensor is responsible for monitoring, a bad sensor, or even a wiring issue. In some
                cases, a check engine light may turn on and then eventually turn itself off with no outside
                intervention.
              </p>
              <p className="text-gray-700">
                That doesn't mean the problem has gone away, or that there was no problem in the first place. In fact,
                information about the problem is usually still available via special auto diagnostic equipment even
                after the light turns itself off.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <Image
              src="https://imagescdn.dealercarsearch.com/DealerImages/19018/28912/service2.png"
              alt="Diagnostic laptop connected to a car"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Auto Repairs Section */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="flex items-center justify-center">
            <Image
              src="https://imagescdn.dealercarsearch.com/DealerImages/19018/28912/service3.jpg"
              alt="Various car parts and maintenance items"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-blue-600">AUTO REPAIRS</h2>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700 mb-4">
                Spending few hundred dollars annually on maintenance and repairs may sound like a lot, but it's nothing
                compared to the added expense of buying a new car, especially if your current car is paid off. In fact,
                by some estimates, every five years you drive your car after paying it off saves you the monetary
                equivalent of a new car.
              </p>
              <p className="text-gray-700">
                If your car is under warranty, the manufacturer covers the cost of most repairs. After the warranty
                expires, you are 100% responsible for all necessary repairs and services. In case if you have an
                extended warranty plan it should help you to cover your predetermined expenses. And yes, we work with
                all major extended warranty companies. Our associates will help you file a proper warranty claim and get
                you vehicle up and running in no time.
              </p>
            </div>
          </div>
        </div>

        {/* Wheels and Tires Service Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-blue-600">WHEELS AND TIRES SERVICE</h2>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700 mb-4">
                The tires are the only thing between the vehicle and the road. When they are properly inflated and in
                good condition, the handling, stability and safety of the vehicle will be maximized. Conversely, when
                the tires are under inflated, worn out or damaged, all of the safety systems on the vehicle cannot
                overcome the loss of control that comes with a blow-out or hydroplaning situation.
              </p>
              <p className="text-gray-700 mb-4">
                Air pressure in a tire is like oil in an engine; when it is low, the resulting internal damage is unseen
                until it is too late. Tires naturally lose 1-2 psi per month, so ongoing neglect will eventually result
                in a tire that cannot support the weight of the vehicle and the occupants. When this happens, the
                resulting blow-out can result in the loss of control and an accident. Failing to inspect and service you
                tires often results in damaging not only tires but other vehicle suspension and drivetrain components.
              </p>
              <p className="text-gray-700">
                It also develops irregular treadwear patterns that cause vibrations and lost of vehicle steering
                control. The same can be said for alignments. When the vehicle is not properly aligned, the tires will
                wear out faster which leads to increased operating costs.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <Image
              src="https://imagescdn.dealercarsearch.com/DealerImages/19018/28912/service4.png"
              alt="Tire alignment and balancing equipment"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
