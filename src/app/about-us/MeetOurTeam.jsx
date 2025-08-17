"use client";

import Image from "next/image";
import { leadership, team } from "@/data/about-us/teamData";

export default function MeetOurTeam() {
  return (
    <section
      className="px-4 py-16 flex flex-col items-center"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Leadership Section */}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center">
        Our Leadership
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        The visionaries guiding our mission.
      </p>

      <div className="flex flex-wrap justify-center gap-12 mb-20">
        {leadership.map((leader, idx) => (
          <div key={idx} className="max-w-sm text-center">
            <div className="mx-auto mb-4 w-[400px] h-[350px] relative rounded-xl overflow-hidden">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{leader.name}</h3>
            <p className="text-blue-400 font-medium">{leader.position}</p>
            <p className="mt-4 text-md" style={{ color: "var(--text-color1)" }}>
              {leader.description}
            </p>
          </div>
        ))}
      </div>

      {/* Talented Team Section */}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center">
        Our Talented Team
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        The brilliant minds behind our success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full justify-center">
        {/* Centered top card - Kirti Diwidi */}
        {team.length > 0 && (
          <div className="text-center max-w-sm mx-auto col-span-full">
            <div className="mx-auto mb-4 w-[300px] h-[350px] relative rounded-xl overflow-hidden bg-white">
              <Image
                src={team[0].image}
                alt={team[0].name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">{team[0].name}</h3>
            <p className="text-blue-400 font-medium">{team[0].position}</p>
            <p className="text-gray-400 mt-3 text-sm">{team[0].description}</p>
          </div>
        )}

        {/* Remaining team members */}
        {team.slice(1).map((member, idx) => (
          <div key={idx} className="text-center max-w-sm mx-auto">
            <div className="mx-auto mb-4 w-[300px] h-[350px] relative rounded-xl overflow-hidden bg-white">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-blue-400 font-medium">{member.position}</p>
            <p className="text-gray-400 mt-3 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
