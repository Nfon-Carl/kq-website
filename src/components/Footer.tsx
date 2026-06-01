/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center space-y-1">
        <p>
          Copyright &copy; 2026 All rights reserved by KQ Moving and Hauling Services
        </p>
        <p>
          Designed by{' '}
          <a
            href="https://2nicesocialsync.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2"
          >
            2nicesocialsync.com
          </a>
          {' '}· Powered by{' '}
          <a
            href="https://schedulebility.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2"
          >
            schedulebility.com
          </a>
        </p>
      </div>
    </footer>
  );
}
