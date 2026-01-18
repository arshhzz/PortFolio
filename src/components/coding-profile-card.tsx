"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface CodingProfileCardProps {
  logoUrl: string;
  altText: string;
  name: string;
  username?: string;
  href?: string;
  description?: string;
  stats?: {
    label: string;
    value: string;
  };
}

export const CodingProfileCard = ({
  logoUrl,
  altText,
  name,
  username,
  href,
  description,
  stats,
}: CodingProfileCardProps) => {
  return (
    <Link
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4 p-6">
          <Avatar className="border size-12 bg-muted-background dark:bg-foreground flex-shrink-0">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-sm sm:text-base leading-none mb-1">
              {name}
            </h3>
            {username && (
              <p className="text-xs sm:text-sm text-muted-foreground truncate">
                @{username}
              </p>
            )}
          </div>
        </div>

        {description && (
          <div className="px-6 pb-3 flex-grow">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {stats && (
          <div className="px-6 pb-6 pt-3 border-t">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-muted-foreground">
                {stats.label}
              </span>
              <span className="text-xs sm:text-sm font-semibold">
                {stats.value}
              </span>
            </div>
          </div>
        )}
      </Card>
    </Link>
  );
};
