<div align="center">

# A-Von CashBook

**Offline-first financial management desktop app for Ugandan schools**

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](CHANGELOG.md)
[![Status](https://img.shields.io/badge/status-planning-orange.svg)]()
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey.svg)]()
[![Built with Tauri](https://img.shields.io/badge/built%20with-Tauri-blue.svg)](https://tauri.app)
[![Python](https://img.shields.io/badge/python-3.11%2B-blue.svg)](https://python.org)

[Overview](#overview) • [Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Project Structure](#project-structure) • [Contributing](#contributing) • [License](#license)

</div>

---

## Overview

**A-Von CashBook** is a proprietary offline-first desktop application designed to streamline financial management for Ugandan educational institutions. Built for bursars, headteachers, and school proprietors, it replaces manual cashbooks and spreadsheets with a secure, auditable, and printable financial system.

> Developed and maintained by **A-Von Computer Solutions**.

---

## Features

- Student registry with class and term enrollment
- User-defined fee structures per class per term
- Payment collection with official receipt generation (`YYYY/T#/NNNN`)
- Partial payments, payment plans, and fee adjustments (bursary/discounts)
- Automatic cashbook population from every transaction
- Expenditure management with approval workflow
- Bank deposit recording
- Financial reports: daily collections, fee balances, student statements, term summaries
- Term lifecycle management: open, close, freeze, carry-forward balances
- Role-based access control (Super Admin, Headteacher, Bursar, Data Entry)
- Full audit trail: every action logged with user, timestamp, old and new values
- A4 PDF printing: receipts, vouchers, reports
- Excel import for student data
- Encrypted local backup and restore
- 100% offline — no internet required

---

## Tech Stack

| Layer | Technology |
|---|---|
| Desktop Shell | Tauri |
| Frontend | React + TailwindCSS |
| Backend | Python 3.11+ / FastAPI |
| Database | SQLite via SQLAlchemy |
| Migrations | Alembic |
| PDF Generation | ReportLab |
| Excel Import | openpyxl |
| IPC | Tauri sidecar (localhost FastAPI) |

---

## Getting Started

> Setup instructions will be added once the development scaffold is ready.

See [docs/specs](docs/specs) for full project specifications.

---

## Project Structure
```
avon-cashbook/
├── src-tauri/          # Tauri desktop shell (Rust)
├── frontend/           # React + TailwindCSS UI
├── backend/            # Python FastAPI backend + SQLite
│   ├── app/
│   │   ├── api/        # Route handlers
│   │   ├── models/     # SQLAlchemy models
│   │   ├── schemas/    # Pydantic schemas
│   │   ├── services/   # Business logic
│   │   ├── reports/    # PDF generation
│   │   └── utils/      # Helpers
│   ├── migrations/     # Alembic migrations
│   └── tests/          # Backend tests
├── docs/               # Specifications, design, screenshots
└── scripts/            # Build and utility scripts
```

---

## Modules (Phase 1)

| Module | Status |
|---|---|
| Institution Setup | Planned |
| Academic Structure | Planned |
| Student Registry | Planned |
| Fee Management | Planned |
| Payment Collection | Planned |
| Daily Collection Report | Planned |
| Cashbook | Planned |
| Banking | Planned |
| Expenditure Management | Planned |
| Financial Reports | Planned |
| Term Management | Planned |
| RBAC and User Management | Planned |
| Audit Trail | Planned |
| Backup and Restore | Planned |

---

## License

Proprietary software. All rights reserved.  
Copyright (c) 2025 A-Von Computer Solutions.  
Unauthorized copying, distribution, or modification is strictly prohibited.

---

<div align="center">
Built with care by <strong>A-Von Computer Solutions</strong>
</div>
