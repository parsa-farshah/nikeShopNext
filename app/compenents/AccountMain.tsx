"use client";
import useUserStore from "../store";
import LogOutBtn from "./LogOutBtn";

function AccountMain() {
  const { AccEmail, AccFullName } = useUserStore();
  return (
    <div className="w-full bg-white dark:bg-black py-20 px-4 md:px-[20%]">
      <div>
        <h5 className="text-5xl mb-4">My Account</h5>
        <LogOutBtn />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="mt-8 md:mt-12">
          <h2 className="font-semibold mb-3">Order History</h2>
          <p>You haven’t placed any orders yet.</p>
        </div>
        <div className="mt-8 md:mt-12">
          <h2 className="font-semibold mb-3">Account Details</h2>
          <h5>{AccEmail}</h5>
          <h5>{AccFullName}</h5>
        </div>
      </div>
    </div>
  );
}

export default AccountMain;
